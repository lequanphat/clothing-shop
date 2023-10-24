import jwt from 'jsonwebtoken';
import JWTService from '../services/JWTService.js';
class auth {
    checkTokenUser(req, res, next) {
        const ignoreUrls = [
            '/auth/login',
            '/auth/register'
        ]
        if(ignoreUrls.includes(req.url.toLowerCase().trim())){ 
            return next();
        }
        console.log(req.url);
        const { refreshToken, accessToken } = req.cookies;
        if (!refreshToken || !accessToken) {
            return next(new Error('Unauthorized'));
        }
        try {
            const jwtObject = JWTService.verifyAccessToken(accessToken);
            const isExpired = Date.now() >= jwtObject.exp * 1000;
            if (isExpired) {
                throw new Error('Token had expired');
            } else {
                console.log('next to ...');
                next();
            }
        } catch (error) {
            console.log('auth' + error.message);
            next(new Error('token is required'));
        }
    }
}
export default new auth();
