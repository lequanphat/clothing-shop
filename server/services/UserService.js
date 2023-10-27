import User from '../models/User.js';
import bcrypt from 'bcrypt';
import JWTService from './JWTService.js';
import {HASH_PASSWORD_SECRET} from '../config/index.js'
class UserService {
    createUser = async (newUser) => {
        const { name, email, password, phone } = newUser;
        const hashedPassword = await bcrypt.hash(password, parseInt(HASH_PASSWORD_SECRET));
        console.log(hashedPassword);
        try {
            const user = await User.create({
                name,
                email,
                password: hashedPassword,
                phone,
            });
            if (user) {
                return user; 
            }
        } catch (e) {
            return {e};
        }
    };
    getUser = async(data) => {
        try {
            const user = await User.findOne(data);
            if (user) {
                return {
                    status: 'OK',
                    message: 'User is available',
                    data: user,
                };
            } else {
                return new Error('User is not available')
            }
        } catch (e) {
            return new Error('Error in get user '+JSON.stringify(e))
        }
    };
    checkExistedUser = async(data) => {
        const user = await User.exists(data);
        return user;
    }
    updateUser = async(id, data) => {
        try {
            const updateUser = await User.findByIdAndUpdate(id, data, { new: true });
            if (updateUser) {
                return updateUser;
            } else {
                return new Error('User is not exists')
            }
        } catch (e) {
            return new Error('Error in update user '+JSON.stringify(e))
        }
    };
    deleteUser = async (id) => {
        try {
            const deleteUser = await User.findByIdAndDelete({ _id: id });
            if (deleteUser) {
                return {
                    status: 'OK',
                    message: 'User is deleted',
                    data: deleteUser,
                };
            } else {
                return new Error('User is not exists')
            }
        } catch (e) {
            return new Error('Error in delete user: '+JSON.stringify(e))
        }
    };
    login = async (data) => {
        const { email, password } = data;
        let user = await User.findOne({ email: email });
        if (user) {
            const isMath = await bcrypt.compare(password, user.password);
            if (isMath) {
                let id = user._doc?._id;
                let access_token = JWTService.signAccessToken({id}, '30m');
                let refresh_token = JWTService.signRefreshToken({id}, '60m');
               
                user = await this.updateUser(user._doc?._id, {access_token, refresh_token})
                return user;
            } else {
                return new Error('Password is incorrect')
            }
        } else {
            return new Error('Account is not exists')
        }
    };
}
export default new UserService();
