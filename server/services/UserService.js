import User from '../models/User.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
class UserService {
    createUser = async (newUser) => {
        const { name, email, password, phone } = newUser;
        const hashedPassword = await bcrypt.hash(password, parseInt(process.env.HASH_PASSWORD_SECRET));
        console.log(hashedPassword);
        return new Promise(async (resolve, reject) => {
            try {
                const user = await User.create({
                    name,
                    email,
                    password: hashedPassword,
                    phone,
                });
                if (user) {
                    resolve({
                        status: 'OK',
                        message: 'User is created',
                        data: user,
                    });
                }
            } catch (e) {
                reject(e);
            }
        });
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
                reject(e);
            }
        });
    };
    login = async (data) => {
        const { email, password } = data;
        return new Promise(async (resolve, reject) => {
            try {
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
                        resolve({
                            status: 'OK',
                            message: 'Login successfully',
                            data: {
                                ...user._doc,
                                token,
                            },
                        });
                    } else {
                        resolve({
                            status: 'ERROR',
                            message: 'Password is incorrect',
                        });
                    }
                } else {
                    resolve({
                        status: 'ERROR',
                        message: 'Account is not available',
                    });
                }
            } catch (e) {
                reject(e);
            }
        });
    };
}
export default new UserService();
