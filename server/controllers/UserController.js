import User from '../models/User.js';
import UserService from '../services/UserService.js';
class UserController {
    // create
    async createUser(req, res) {
        try {
            const { name, email, password, confirmPassword, phone } = req.body;
            if(!name || !email  || !password  || !confirmPassword  || !phone){
                return res.status(404).json({
                    status: 'ERROR',
                    message: 'fields are not full'
                })
            }
            if(password !== confirmPassword){
                return res.status(404).json({
                    status: 'ERROR',
                    message: 'confirm password is incorrect'
                })
            }
            const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
            if(!emailRegex.test(email)){
                return res.status(404).json({
                    status: 'ERROR',
                    message: 'email is incorrect'
                })
            }
            const checkAvailableUser = await UserService.getUser({email: email})
            if(checkAvailableUser.status === 'OK'){
                return res.status(404).json({
                    status: 'ERROR',
                    message: 'email is already used with another accout'
                })
            }
            const respone = await UserService.createUser(req.body);

            return res.status(200).json(respone)
        } catch (e) {
            return res.status(404).json({
                message: e,
            });
        }
    }
    async loginUser(req, res) {
        try {
            const {email, password} = req.body;
            if(!email  || !password ){
                return res.status(404).json({
                    status: 'ERROR',
                    message: 'fields are not full'
                })
            }
            const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
            if(!emailRegex.test(email)){
                return res.status(404).json({
                    status: 'ERROR',
                    message: 'email is incorrect'
                })
            }
            const respone = await UserService.login({email, password});
            return res.status(200).json(respone)
           
        } catch (e) {
            return res.status(404).json({
                message: e,
            });
        }
    }
    // get
    async getUsers(req, res) {
        const users = await User.find({}).sort({ createdAt: -1 });
        res.status(200).json(users);
    }
}
export default new UserController();
