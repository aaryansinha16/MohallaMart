const { Schema, model, default: mongoose } = require("mongoose");

const singleProductObjectSchema = new Schema({
    productId : {type: mongoose.Types.ObjectId, ref: 'product'},
    quantity : {type: Number}
})
const orderSchema = new Schema({
    userId: {type: mongoose.Schema.Types.ObjectId, ref: "user"}, 
    products: [singleProductObjectSchema],
    totalCost: {type: Number},
    orderId: {type: String}
})


module.exports = model('order', orderSchema)