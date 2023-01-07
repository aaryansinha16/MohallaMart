const { model, Schema, default: mongoose } = require("mongoose");

const reviewSchema = new Schema({
    userId: {type: mongoose.Types.ObjectId, ref: "user"},
    productId: {type: mongoose.Types.ObjectId, ref: "product"},
    review: {type: String, required: true},
    rating: {type: Number, required: true, max: 5},
    createdOn: {type: Date}
})

module.exports = model('review', reviewSchema)