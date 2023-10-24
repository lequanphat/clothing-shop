import User from '../models/User.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
class UserService {
    createUser = async (newUser) => {
        const { name, email, password, phone } = newUser;
        const hashedPassword = await bcrypt.hash(password, parseInt(process.env.HASH_PASSWORD_SECRET));
        console.log(hashedPassword);
        try {
            const user = await User.create({
                name,
                email,
                password: hashedPassword,
                phone,
            });
            if (user) {
                return {
                    status: 'OK',
                    message: 'User is created',
                    data: user,
                };
            }
        } catch (e) {
            return {e};
        }
    };
    getUser = (data) => {
        return new Promise(async (resolve, reject) => {
            try {
                const user = await User.findOne(data);
                if (user) {
                    resolve({
                        status: 'OK',
                        message: 'User is available',
                        data: user,
                    });
                } else {
                    resolve({
                        status: 'ERROR',
                        message: 'User is not available',
                        data: user,
                    });
                }
            } catch (e) {
                resolve({
                    status: 'ERROR',
                    message: 'User is not available',
                    data: null,
                });
            }
        });
    };
    updateUser = (id, data) => {
        return new Promise(async (resolve, reject) => {
            try {
                const updateUser = await User.findByIdAndUpdate(id, data, { new: true });
                if (updateUser) {
                    resolve({
                        status: 'OK',
                        message: 'User is available',
                        data: updateUser,
                    });
                } else {
                    resolve({
                        status: 'ERROR',
                        message: 'User is not available',
                        data: updateUser,
                    });
                }
            } catch (e) {
                resolve({
                    status: 'ERROR',
                    message: 'User is not available',
                    data: null,
                });
            }
        });
    };
    deleteUser = (id) => {
        return new Promise(async (resolve, reject) => {
            try {
                const deleteUser = await User.findByIdAndDelete({ _id: id });
                if (deleteUser) {
                    resolve({
                        status: 'OK',
                        message: 'User is deleted',
                        data: deleteUser,
                    });
                } else {
                    resolve({
                        status: 'ERROR',
                        message: 'User is not available',
                        data: deleteUser,
                    });
                }
            } catch (e) {
                resolve({
                    status: 'ERROR',
                    message: 'User is not available',
                    data: null,
                });
            }
        });
    };
    login = async (data) => {
        const { email, password } = data;
        const user = await User.findOne({ email: email });
        if (user) {
            const isMath = await bcrypt.compare(password, user.password);
            if (isMath) {
                let token = jwt.sign(
                    {
                        data: user,
                    },
                    process.env.JWT_SECRET,
                    {
                        expiresIn: '3 days',
                    },
                );
                return {
                    status: 'OK',
                    message: 'Login successfully',
                    data: {
                        ...user._doc,
                        token,
                    },
                };
            } else {
                return {
                    status: 'ERROR',
                    message: 'Password is incorrect',
                };
            }
        } else {
            return {
                status: 'ERROR',
                message: 'Account is not available',
            };
        }
    };
}
export default new UserService();
