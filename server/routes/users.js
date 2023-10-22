import express from 'express'
import UserController from '../controllers/UserController.js'
const usersRouter = express.Router()
// GET
usersRouter.post('/login', UserController.loginUser)
usersRouter.post('/register', UserController.createUser)

usersRouter.get('/', UserController.getUsers)
// POST
usersRouter.post('/', UserController.createUser)


// DELETE

// PATCH
export default usersRouter