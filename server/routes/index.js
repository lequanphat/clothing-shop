import productsRouter from './products.js'
import usersRouter from './users.js'
const routes = (app) => {
    app.use('/product', productsRouter)
    app.use('/api/user', usersRouter)

}
export default routes