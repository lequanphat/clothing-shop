import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();
const ACCESS_SECRET = process.env.ACCESS_TOKEN_SECRET;
const REFRESH_SECRET = process.env.REFRESH_TOKEN_SECRET;
class JWTService {
    static signAccessToken(payload, expiryTime, secret=ACCESS_SECRET) {
        console.log(secret);
        return jwt.sign(payload, secret, { expiresIn: expiryTime });
    }
    static signRefreshToken(payload, expiryTime, secret=REFRESH_SECRET) {
        console.log(secret);
        return jwt.sign(payload, secret, { expiresIn: expiryTime });
    }
    static verifyAccessToken(token, secret=ACCESS_SECRET) {
        return jwt.verify(token, secret);
    }
    static verifyRefreshToken(token, secret=REFRESH_SECRET) {
        return jwt.verify(token, secret);
    }
}

export default JWTService;
