import mongoose from 'mongoose';
import Product from '../models/Product.js';

class ProductController {
    // create
    async createWorkout(req, res) {
        const { name, desc, price } = req.body;
        if (name && desc && price) {
        } else {
            res.status(400).json({ error: 'Please fill all fields' });
            return;
        }
        try {
            const workout = await Product.create({ name, desc, price });
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
        const workout = await Product.findById(id);
        if (!workout) {
            res.status(404).json({ error: 'No such workout' });
            return;
        }
        res.status(200).json(workout);
    }
    async getWorkouts(req, res) {
        const workouts = await Product.find({}).sort({ createdAt: -1 });
        res.status(200).json(workouts);
    }
    // delete
    async deleteWorkout(req, res) {
        const { id } = req.params;
        if (!mongoose.Types.ObjectId.isValid(id)) {
            res.status(404).json({ error: 'id valid type' });
            return;
        }
        const workout = await Product.findOneAndDelete({ _id: id });
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
        const workout = await Product.findOneAndUpdate(
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
export default new ProductController();
