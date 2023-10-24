import User from '../models/User.js';
import UserService from '../services/UserService.js';
class UserController {
    
    
    // get
    async getUsers(req, res) {
        const users = await User.find({}).sort({ createdAt: -1 });
        res.status(200).json(users);
    }
    async getUser(req, res){
        const id = req.params?.id
        const response = await UserService.getUser({_id: id})
        res.status(200).json(response);
    }
    // put
    async updateUser(req, res){
        try {
            const userId = req.params?.id
            const data = req.body
            const respone = await UserService.updateUser(userId, data)
            return res.status(200).json(respone)
        } catch (e) {
            return res.status(404).json({
                message: e,
            });
        }
    }
    // delete 
    async deleteUser(req, res){
        try {
            const userId = req.params?.id
            const respone = await UserService.deleteUser(userId)
            return res.status(200).json(respone)
        } catch (e) {
            return res.status(404).json({
                message: e,
            });
        }
    }
}
export default new UserController();
