import express from 'express'
import UserController from '../controllers/UserController.js'
const usersRouter = express.Router()
// GET

usersRouter.get('/', UserController.getUsers)
// POST
usersRouter.post('/', UserController.createUser)

// DELETE

// PATCH
export default usersRouter