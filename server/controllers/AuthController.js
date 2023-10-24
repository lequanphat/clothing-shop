import Joi from 'joi';
import UserService from '../services/UserService.js';
class AuthController {
    async login(req, res, next) {
        const schema = Joi.object({
            email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
            password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
        });
        const { email, password } = req.body;
        try {
            const validation = await schema.validateAsync({ email, password});
            const respone = await UserService.login({ email, password });
            if(respone instanceof Error){
                next(respone)
                return
            }
            return res.status(200).json({validation, respone});
        } catch (e) {
            next(e);
        }
    }
    // create
    async register(req, res,next) {
        const schema = Joi.object({
            name: Joi.string().min(5).max(100).required(),
            email: Joi.string().email({minDomainSegments:2 ,tlds: {allow: ['com','net']}}),
            password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
            confirmPassword: Joi.ref('password'),
            phone: Joi.string().pattern(new RegExp('^[0]+[0-9]{8,10}'))
        })
        const { name, email, password, confirmPassword, phone } = req.body; 
        try {
            const validation = await schema.validateAsync({ name, email, password, confirmPassword, phone});
            const existedUser = await UserService.checkExistedUser({ email: email });
            if (existedUser) {
                return next(new Error('email is already registered'))
            }
            const respone = await UserService.createUser(req.body);
            return res.status(200).json({validation, respone});
        } catch (e) {
            next(e)
        }
    }
}
export default new AuthController();
