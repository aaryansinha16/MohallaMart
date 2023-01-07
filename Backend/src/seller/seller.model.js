const { Schema, model, default: mongoose } = require("mongoose");

const sellerSchema = new Schema({
    userId: {type: mongoose.Types.ObjectId, ref: 'user'},
    storeName: {type: String}
},
{timestamps: true})

module.exports = model('seller', sellerSchema)
