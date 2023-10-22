import mongoose from "mongoose";

const orderSchema = mongoose.Schema({
    orderItems: [
        { 
            amount: {type: Number, required:true},
            product: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'product',
                required: true,
            }
        }
    ],
    shippingAdress: {
        address: {type:String, required: true},
        phone: {type: Number, required: true}
    },
    paymentMethod: {type:String, required:true},
    productsPrice: {type:Number, required:true},
    shippingPrice: {type:Number, required: true},
    totalPrice: {type:Number, required:true},
    user: {type: mongoose.Schema.Types.ObjectId, ref: 'user', required: true},
    isComfirm: {type: Boolean, default: false},
    comfirmdAt: {type: Date},
    isPaid: {type: Boolean, default: false},
    paidAt: {type: Date},
    isSuccess: {type: Boolean, default: false}


}, { timestamps: true })


export default mongoose.model('order', orderSchema)