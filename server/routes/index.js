import usersRouter from './users.js'
import authRouter from './auth.js'
import blogRouter from './blog.js'
const routes = (app) => {
    app.use('/auth/', authRouter)
    app.use('/api/user', usersRouter)
    app.use('/api/blog', blogRouter)
}
export default routes