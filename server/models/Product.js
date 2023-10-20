import mongoose from "mongoose";

const productSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    desc: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    }
}, { timestamps: true })


export default mongoose.model('products', productSchema)