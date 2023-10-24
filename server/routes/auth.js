import express from 'express'
import AuthController from '../controllers/AuthController.js'
const authRouter = express.Router()
authRouter.post('/login', AuthController.loginUser)
authRouter.post('/register', AuthController.createUser)

export default authRouter