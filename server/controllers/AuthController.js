import Joi from 'joi';
import UserService from '../services/UserService.js';
import CookieService from '../services/CookieService.js';
import JWTService from '../services/JWTService.js';
class AuthController {
    async login(req, res, next) {
        const schema = Joi.object({
            email: Joi.string()
                .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
                .message('Email không đúng định dạng!'),
            password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
        });
        const { email, password } = req.body;
        try {
            const validation = await schema.validateAsync({ email, password }, { abortEarly: false });
            const respone = await UserService.login({ email, password });
            if (respone instanceof Error) {
                next(respone);
                return;
            }
            CookieService.saveCookie(res, 'accessToken', respone.access_token);
            CookieService.saveCookie(res, 'refreshToken', respone.refresh_token);
            return res.status(200).json(respone);
        } catch (e) {
            next(e);
        }
    }
    // create
    async register(req, res, next) {
        const schema = Joi.object({
            name: Joi.string().min(5).max(100).required(),
            email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
            password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
            confirmPassword: Joi.ref('password'),
            phone: Joi.string().pattern(new RegExp('^[0]+[0-9]{8,10}')),
        });
        const { name, email, password, confirmPassword, phone } = req.body;
        try {
            const validation = await schema.validateAsync({ name, email, password, confirmPassword, phone });
            const existedUser = await UserService.checkExistedUser({ email: email });
            if (existedUser) {
                return next(new Error('email is already registered'));
            }
            const respone = await UserService.createUser(req.body);
            return res.status(200).json({ validation, respone });
        } catch (e) {
            next(e);
        }
    }
    async logout(req, res, next) {
        const { refreshToken } = req.cookies;
        try {
            const data = JWTService.verifyRefreshToken(refreshToken);
            await UserService.updateUser(data.id, { access_token: '', refresh_token: '', name:"Nguyễn Cút Ki" });
            res.clearCookie('accessToken');
            res.clearCookie('refreshToken');
            return res.status(200).json({ refreshToken, data });
        } catch (error) {
            return next(error)
        }
        
    }
    async refresh(req, res, next){
        const refreshToken = req.cookies?.refreshToken;
        try {
            const id = JWTService.verifyRefreshToken(refreshToken).id
        } catch (error) {
            return next(new Error('Unauthorized'))
        }

    }
}
export default new AuthController();
