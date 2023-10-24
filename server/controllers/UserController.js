import User from '../models/User.js';
import UserService from '../services/UserService.js';
class UserController {
    // get
    async getUsers(req, res, next) {
        const users = await User.find({}).sort({ createdAt: -1 });
        res.status(200).json(users);
    }
    async getUser(req, res, next) {
        const id = req.params?.id;
        const response = await UserService.getUser({ _id: id });
        if (response instanceof Error) {
            next(response);
            return;
        }
        res.status(200).json(response);
    }
    // put
    async updateUser(req, res, next) {
        const userId = req.params?.id;
        const data = req.body;
        const respone = await UserService.updateUser(userId, data);
        if (respone instanceof Error) {
            next(respone);
            return;
        }
        return res.status(200).json(respone);
    }
    // delete
    async deleteUser(req, res, next) {
        const userId = req.params?.id;
        const respone = await UserService.deleteUser(userId);
        if(respone instanceof Error){
            next(respone);
            return;
        }
        res.status(200).json(respone);
    }
}
export default new UserController();
