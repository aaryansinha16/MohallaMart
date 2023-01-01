const express = require('express')
const orderModel = require('./orders.model')
const userModel = require("../user/user.model")
const app = express.Router()

//? GET all the ordred items of the particular user
app.get("/", async(req, res) => {
    let {userId} = req.query
    
    try{
        let orderItems = await orderModel.find({userId: userId}).populate("productId")
        return res.send({
            message: "Orders fetch successfull",
            items: orderItems
        })
    }catch(e){
        return res.status(500).send({
            message: e.message
        })
    }
})

//? POST a new order for a particular User
app.post("/new-order", async(req,res) => {
    let {userId, productId, totalCost} = req.body

    try{
        let checkItem = await orderModel.findOne({userId, productId})
        if(!checkItem){
            await orderModel.create({userId, productId, totalCost})
            return res.send({
                message: "Order successfull"
            })
        }else{
            return res.send({
                message: "This order has already been processed"
            })
        }
    }catch(e){
        return res.status(500).send({
            message: e.message
        })
    }
})

//? GET All orders 
//!(Only for Admin)
app.get("/all-orders", async(req, res) => {
    let {userId} = req.body
    let user = await userModel.findById(userId)
    if(!user) return res.status(404).send("User not found")
    if(user.role != "Admin"){
        return res.status(401).send({
            message: "Unauthorized!"
        })
    }
    try{
        let data = await orderModel.find({}).populate("productId")
        return res.send({
            message: "Fetched all orders successfully",
            orders: data
        })
    }catch(e){
        return res.status(500).send({
            message: "Something went wrong"
        })
    }
})


module.exports = app