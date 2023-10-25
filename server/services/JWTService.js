import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import {ACCESS_TOKEN_SECRET, REFRESH_TOKEN_SECRET} from '../config/index.js'
dotenv.config();

class JWTService {
    static signAccessToken(payload, expiryTime, secret=ACCESS_TOKEN_SECRET) {
        console.log(secret);
        return jwt.sign(payload, secret, { expiresIn: expiryTime });
    }
    static signRefreshToken(payload, expiryTime, secret=REFRESH_TOKEN_SECRET) {
        console.log(secret);
        return jwt.sign(payload, secret, { expiresIn: expiryTime });
    }
    static verifyAccessToken(token, secret=ACCESS_TOKEN_SECRET) {
        return jwt.verify(token, secret);
    }
    static verifyRefreshToken(token, secret=REFRESH_TOKEN_SECRET) {
        return jwt.verify(token, secret);
    }
}

export default JWTService;
