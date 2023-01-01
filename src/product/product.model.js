const { Schema, model } = require("mongoose");

const productSchema = new Schema({
    title: {type: String, required: true},
    price: {type: Number, required: true},
    rating: {type: Number},
    quantity: {type: Number},
    image: {type: String},
    reviews : {type: Array}
})

module.exports = model('product', productSchema)