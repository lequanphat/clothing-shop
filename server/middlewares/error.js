import Joy from 'joi'
const errorHandler = (err, req, res, next) => {
    let status = 500;
    let data = {
        message: 'Internal Server Error',
    };
    if (err instanceof Joy.ValidationError){
        status = 401;
        data.message = err.message
        return res.status(status).json(data)
    }
    if(err.message){
        data.message = err.message;
    }
    return res.status(status).json(data)
};
export default errorHandler