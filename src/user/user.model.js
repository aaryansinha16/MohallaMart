const { Schema, model } = require("mongoose");

const userSchema = new Schema({
    fName: {type: String},
    lName: {type: String},
    username: {type: String},
    email: {type: String, unique: true , required: true},
    password: {type: String, required: true},
    role: {type: String, enum: ["Buyer", "Seller", "Admin"], default: "Buyer"}
},
{timestamps : true}
)

module.exports = model('user', userSchema)