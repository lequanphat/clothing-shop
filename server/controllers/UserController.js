import User from '../models/User.js';

class UserController {
    // create
    async createUser(req, res) {
        const { name, email, password } = req.body;
        if (name && email && password) {
        } else {
            res.status(400).json({ error: 'Please fill all fields' });
            return;
        }
        try {
            const workout = await User.create({ name, email, password });
            res.json(workout);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
    // get
    async getUsers(req, res) {
        const workouts = await User.find({}).sort({ createdAt: -1 });
        res.status(200).json(workouts);
    }

}
export default new UserController();
