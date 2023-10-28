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
            password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).message('Mật khẩu phải có ít nhất 3 kí tự!'),
        });
        const { email, password } = req.body;
        try {
            const validation = await schema.validateAsync({ email, password });
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
            name: Joi.string().min(5).max(30).required() .messages({
                'string.empty': 'Tên không được để trống.',
                'string.min': 'Tên phải có ít nhất {#limit} ký tự.',
                'string.max': 'Tên không được vượt quá {#limit} ký tự.',
              }),
            email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).message('Email không đúng dịnh dạng!'),
            password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
            confirmPassword: Joi.ref('password'),
            phone: Joi.string().pattern(new RegExp('^[0]+[0-9]{8,10}')),
        });
        const { name, email, password, confirmPassword, phone } = req.body;
        const {error} = schema.validate({ name, email, password, confirmPassword, phone });
        if(error){
            return next(error);
        }
        try {
            
            const existedUser = await UserService.checkExistedUser({ email: email });
            if (existedUser) {
                return next(new Error('Email đã được đăng kí ở một tài khoản khác!'));
            }
            const respone = await UserService.createUser(req.body);
            return res.status(200).json(respone);
        } catch (e) {
            next(e);
        }
    }
    async logout(req, res, next) {
        const { refreshToken } = req.cookies;
        try {
            const data = JWTService.verifyRefreshToken(refreshToken);
            await UserService.updateUser(data.id, { access_token: '', refresh_token: ''});
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
