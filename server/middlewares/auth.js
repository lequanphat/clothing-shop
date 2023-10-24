import jwt from 'jsonwebtoken';
class auth {
    checkTokenUser(req, res, next) {
        if (
            req.url.toLowerCase().trim() == '/auth/login'.toLowerCase().trim() ||
            req.url.toLowerCase().trim() == '/auth/register'.toLowerCase().trim() 
        ) {
            console.log(req.url);
            next();
            return;
        }
        console.log(req.url);
        const token = req.headers?.authorization?.split(' ')[1];
        console.log('token:' + token);
        try {
            const jwtObject = jwt.verify(token, process.env.JWT_SECRET);
            console.log('jwtobject:' + jwtObject);
            console.log('data:' + JSON.stringify(jwtObject?.data));
            console.log('iat:' + jwtObject.iat); // issued at
            console.log('exp:' + jwtObject.exp); // expired 
            const isExpired = Date.now() >= jwtObject.exp * 1000;
            if (isExpired) {
                throw new Error('Token had expired')
            }else{
                console.log("next to ...");
                next()
            }
        } catch (error) {
            console.log('auth'+error.message);
            res.redirect('/auth/login');
        }
    }
    
}
export default new auth();
