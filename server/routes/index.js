import usersRouter from './users.js'
import authRouter from './auth.js'
const routes = (app) => {
    app.use('/auth/', authRouter)
    app.use('/api/user', usersRouter)
}
export default routes