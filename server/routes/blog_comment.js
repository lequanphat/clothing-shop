import express from 'express'
import BlogCommentController from '../controllers/BlogCommentController.js';
const commentRouter = express.Router();


// get by id
commentRouter.get('/:id', BlogCommentController.getById)
// create
commentRouter.post('/', BlogCommentController.create)
// delete
commentRouter.delete('/:id', BlogCommentController.delete)
// update
commentRouter.patch('/:id', BlogCommentController.update)
// get all
commentRouter.get('/', BlogCommentController.getBlogComments)


export default commentRouter;