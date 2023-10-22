import jwt from 'jsonwebtoken';
class auth {
    checkToken(req, res, next) {
        if (
            req.url.toLowerCase().trim() == '/login'.toLowerCase().trim() ||
            req.url.toLowerCase().trim() == '/users/login'.toLowerCase().trim() ||
            req.url.toLowerCase().trim() == '/css/app.css' ||
            req.url.toLowerCase().trim() == '/favicon.ico' ||
            req.url.toLowerCase().trim() == '/'
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
                next()
            }
        } catch (error) {
            console.log(error.message);
            res.redirect('/login');
        }
    }
}
export default new auth();
