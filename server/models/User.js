import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    isAdmin: { 
        type: Boolean,
        default: false,
        required: true,
    },
    phone: {
        type: String,
    },
    access_token: {
        type: String,
        default: '',
    },
    refresh_token: {
        type: String,
        default: '',
    }
}, { timestamps: true })


export default mongoose.model('user', userSchema)