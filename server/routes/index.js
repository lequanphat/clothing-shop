import usersRouter from './users.js'
import authRouter from './auth.js'
import blogRouter from './blog.js'
import blogCommentRouter from './blog_comment.js'
const routes = (app) => {
    app.use('/auth/', authRouter)
    app.use('/api/user', usersRouter)
    app.use('/api/blog', blogRouter)
    app.use('/api/blog-comment', blogCommentRouter)
}
export default routes