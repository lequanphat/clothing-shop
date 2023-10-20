import express from 'express'
import ProductController from '../controllers/ProductController.js'
const productsRouter = express.Router()
// GET

productsRouter.get('/:id', ProductController.getWorkout)
productsRouter.get('/', ProductController.getWorkouts)
// POST
productsRouter.post('/', ProductController.createWorkout)

// DELETE
productsRouter.delete('/:id', ProductController.deleteWorkout)

// PATCH
productsRouter.patch('/:id', ProductController.updateWorkout)
export default productsRouter