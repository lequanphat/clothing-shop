// system
import Joi from 'joi';
import BlogComment from '../models/BlogComment.js';
//
const mongodbIdPattern = /^[0-9a-fA-F]{24}$/;
class BlogCommentController {
    async getBlogComments(req, res, next) {
        try {
            const comments = await BlogComment.find({});
            return res.status(200).json({ comments });
        } catch (error) {
            return next(error);
        }
    }
    async getById(req, res, next) {
        const { id } = req.params;
        const schema = Joi.object({
            id: Joi.string().regex(mongodbIdPattern).required(),
        });
        const { error } = schema.validate({ id });
        if (error) {
            return next(error);
        }
        try {
            const comment = await BlogComment.findOne({_id: id}).populate('blog').populate('author');
            if(comment){
                return res.status(200).json({comment});
            }else{
                return next(new Error('comment is not exists'));
            }
        } catch (error) {
            return next(error);
        }
    }
    async create(req, res, next) {
        const { content, author, blog } = req.body;
        const createCommentsSchema = Joi.object({
            content: Joi.string().required(),
            author: Joi.string().regex(mongodbIdPattern).required(),
            blog: Joi.string().regex(mongodbIdPattern).required(),
        });
        const { error } = createCommentsSchema.validate({ content, author, blog }, { abortEarly: false });
        if (error) {
            return next(error);
        }
        try {
            const newComment = await BlogComment.create({
                content,
                author,
                blog,
            });
            return res.status(200).json({ newComment });
        } catch (error) {
            return next(error);
        }
    }
    async update(req, res, next) {
        const { content, author, blog } = req.body;
        const updateSchema = Joi.object({
            content: Joi.string().required(),
            author: Joi.string().regex(mongodbIdPattern).required(),
            blog: Joi.string().regex(mongodbIdPattern).required(),
        });
        const { error } = createCommentsSchema.validate({ content, author, blog }, { abortEarly: false });
        if (error) {
            return next(error);
        }
    }
    async delete(req, res, next) {
        res.send('delete');
    }
}

export default new BlogCommentController();
