import Joy from 'joi';
const errorHandler = (err, req, res, next) => {
    let status = 500;
    let data = {
        message: ['Internal Server Error'],
    };
    if (err instanceof Joy.ValidationError) {
        status = 401;
        data.message = err.details[0].message;
        return res.status(status).json(data);
    }
    if (err instanceof Error) {
        status = 403;
        data.message = err.message;
        return res.status(status).json(data);
    }
    if (err.message) {
        data.message = err.message;
    }
    return res.status(status).json(data);
};
export default errorHandler;
