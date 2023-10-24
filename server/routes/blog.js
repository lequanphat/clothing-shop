import express from 'express'
import BlogController from '../controllers/BlogController.js';
const blogRouter = express.Router();


// get by id
blogRouter.get('/:id', BlogController.getById)
// create
blogRouter.post('/', BlogController.create)
// delete
blogRouter.delete('/:id', BlogController.delete)
// update
blogRouter.patch('/:id', BlogController.update)
// get all
blogRouter.get('/', BlogController.getBlogs)


export default blogRouter;