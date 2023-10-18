import express from 'express'
import WorkoutController from '../controllers/WorkoutController.js'
const router = express.Router()
// GET

router.get('/:id', WorkoutController.getWorkout)
router.get('/', WorkoutController.getWorkouts)
// POST
router.post('/', WorkoutController.createWorkout)

// DELETE
router.delete('/:id', WorkoutController.deleteWorkout)

// PATCH
router.patch('/:id', WorkoutController.updateWorkout)
export default router