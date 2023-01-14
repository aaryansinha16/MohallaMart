const { Schema, model, default: mongoose } = require("mongoose");

const productSchema = new Schema({
    title: {type: String, required: true},
    price: {type: Number, required: true},
    ratings: {type: Number},
    quantity: {type: Number},
    image: {type: String},
    // reviews : {type: Array},
    userId : {type: mongoose.Types.ObjectId, ref: "user"}
})

module.exports = model('product', productSchema)