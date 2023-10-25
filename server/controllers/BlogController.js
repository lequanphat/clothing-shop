// system
import Joi from 'joi';
import fs from 'fs';
// mine
import Blog from '../models/Blog.js';
import BlogComment from '../models/BlogComment.js';
import { BACKEND_SERVER_PATH } from '../config/index.js';
// 
const mongodbIdPattern = /^[0-9a-fA-F]{24}$/;
class BlogController {
    async create(req, res, next) {
        const { title, author, content, photo } = req.body;
        const createBlogSchema = Joi.object({
            title: Joi.string().required(),
            author: Joi.string().regex(mongodbIdPattern).required(),
            content: Joi.string().required(),
            photo: Joi.string().required(),
        });
        const { error } = createBlogSchema.validate({ title, author, content, photo });
        if (error) {
            return next(error);
        }
        const buffer = Buffer.from(photo.replace(/^data:image\/(png|jpg|jpeg);base64,/, ''), 'base64');
        const imagePath = `${Date.now()}-${author}.png`;
        try {
            fs.writeFileSync(`storage/${imagePath}`, buffer);
        } catch (error) {
            return next(error);
        }
        try {
            const newBlog = await Blog.create({
                title,
                author,
                content,
                photo: `${BACKEND_SERVER_PATH}/storage/${imagePath}`,
            });
            return res.status(200).json({ blog: newBlog });
        } catch (error) {
            return next(error);
        }
    }
    async getBlogs(req, res) {
        try {
            const blogs = await Blog.find({});
            res.status(200).json({
                blogs,
            });
        } catch (error) {
            return next(error);
        }
    }
    async getById(req, res, next) {
        const { id } = req.params;
        const getByIdScheme = Joi.object({
            id: Joi.string().regex(mongodbIdPattern).required(),
        });
        const { error } = getByIdScheme.validate({ id });
        if (error) {
            return next(error);
        }
        try {
            const blog = await Blog.findOne({ _id: id }).populate('author');
            res.status(200).json({ blog });
        } catch (error) {
            return next(error);
        }
    }
    async update(req, res, next) {
        const { id } = req.params;
        const updateBlogScheme = Joi.object({
            id: Joi.string().regex(mongodbIdPattern).required(),
            title: Joi.string(),
            content: Joi.string(),
            author: Joi.string().regex(mongodbIdPattern).required(),
            photo: Joi.string(),
        });
        let { title, content, author, photo } = req.body;
        const { error } = updateBlogScheme.validate({ id, title, content, author, photo });
        if (error) {
            return next(error);
        }
        if (photo) {
            try {
                const blog = await Blog.findOne({ _id: id });
                if (blog) {
                    let previousPhoto = blog.photo;
                    previousPhoto = previousPhoto.split('/').at(-1);
                    // delete previous photo
                    fs.unlinkSync(`storage/${previousPhoto}`);
                    const buffer = Buffer.from(photo.replace(/^data:image\/(png|jpg|jpeg);base64,/, ''), 'base64');
                    const imagePath = `${Date.now()}-${author}.png`;
                    fs.writeFileSync(`storage/${imagePath}`, buffer);
                    photo = `${BACKEND_SERVER_PATH}/storage/${imagePath}`;
                } else {
                    return next(new Error('blog is not exists'));
                }
            } catch (error) {
                return next(error);
            }
        }

        try {
            const updateBlog = await Blog.findByIdAndUpdate(
                id,
                {
                    title,
                    content,
                    author,
                    photo,
                },
                { new: true },
            );
            if (updateBlog) {
                return res.status(200).json({ updateBlog });
            }
            return next(new Error('blog is not exists'));
        } catch (error) {
            return next(error);
        }
    }
    async delete(req, res) {
        const {id} = req.params;
        const deleteBlogSchema = Joi.object({
            id: Joi.string().regex(mongodbIdPattern).required(),
        });
        const {error} = deleteBlogSchema.validate({id});
        try {
            await Blog.deleteOne({_id: id});
            await BlogComment.deleteMany({blog: id});
            return res.status(200).json({message: 'blog deleted successfully'})
        } catch (error) {
            return next(error);
        }
    }
}

export default new BlogController();
