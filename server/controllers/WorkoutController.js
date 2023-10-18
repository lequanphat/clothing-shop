import mongoose from 'mongoose';
import Workout from '../models/Workout.js';

class WorkoutController {
    // create
    async createWorkout(req, res) {
        const { title, load, reps } = req.body;
        if (title && load && reps) {
        } else {
            res.status(400).json({ error: 'Please fill all fields' });
            return;
        }
        try {
            const workout = await Workout.create({ title, load, reps });
            res.json(workout);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    async getWorkout(req, res) {
        const { id } = req.params;
        if (!mongoose.Types.ObjectId.isValid(id)) {
            res.status(404).json({ error: 'id valid type' });
            return;
        }
        const workout = await Workout.findById(id);
        if (!workout) {
            res.status(404).json({ error: 'No such workout' });
            return;
        }
        res.status(200).json(workout);
    }
    async getWorkouts(req, res) {
        const workouts = await Workout.find({}).sort({ createdAt: -1 });
        res.status(200).json(workouts);
    }
    // delete
    async deleteWorkout(req, res) {
        const { id } = req.params;
        if (!mongoose.Types.ObjectId.isValid(id)) {
            res.status(404).json({ error: 'id valid type' });
            return;
        }
        const workout = await Workout.findOneAndDelete({ _id: id });
        if (!workout) {
            res.status(404).json({ error: 'No such workout' });
            return;
        }
        res.status(200).json(workout);
    }
    // update
    async updateWorkout(req, res) {
        const { id } = req.params;
        if (!mongoose.Types.ObjectId.isValid(id)) {
            res.status(404).json({ error: 'id valid type' });
            return;
        }
        const workout = await Workout.findOneAndUpdate(
            { _id: id },
            {
                ...req.body,
            },
        );
        if (!workout) {
            res.status(404).json({ error: 'No such workout' });
            return;
        }
        res.status(200).json(workout);
    }
}
export default new WorkoutController();
