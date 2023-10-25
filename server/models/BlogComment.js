import mongoose from "mongoose";


const blogCommentSchema = mongoose.Schema({
    blog: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'blog',
        required: true,
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required: true,
    },
    content: {
        type: String,
        required: true,
    }
}, { timestamps: true })


export default mongoose.model('blog_comment', blogCommentSchema)