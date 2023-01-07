const { Schema, model, default: mongoose } = require("mongoose");

const wishlistSchema = new Schema({
    userId: {type: mongoose.Schema.Types.ObjectId, ref: "user"}, 
    productId: {type: mongoose.Schema.Types.ObjectId, ref: "product"},
})

module.exports = model('wishlist', wishlistSchema)