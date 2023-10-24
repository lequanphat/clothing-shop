import express from 'express'
import UserController from '../controllers/UserController.js'
const usersRouter = express.Router()
// GET
usersRouter.patch('/:id', UserController.updateUser)
usersRouter.delete('/:id', UserController.deleteUser)
usersRouter.get('/:id', UserController.getUser)
usersRouter.get('/', UserController.getUsers)


// DELETE

// PATCH
export default usersRouter