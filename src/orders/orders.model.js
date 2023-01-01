const { Schema, model, default: mongoose } = require("mongoose");

const orderSchema = new Schema({
    userId: {type: mongoose.Schema.Types.ObjectId, ref: "user"}, 
    productId: {type: mongoose.Schema.Types.ObjectId, ref: "product"},
    quantity: {type: Number},
    totalCost: {type: Number}
})

module.exports = model('order', orderSchema)