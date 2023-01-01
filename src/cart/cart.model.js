const { Schema, model, default: mongoose } = require("mongoose");

const cartSchema = new Schema({
    userId: {type: mongoose.Schema.Types.ObjectId, ref: "user"}, 
    productId: {type: mongoose.Schema.Types.ObjectId, ref: "product"},
    quantity: {type: Number, default: 1}
})

module.exports = model('cart', cartSchema)