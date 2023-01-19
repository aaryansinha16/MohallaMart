const express = require('express')
const orderModel = require('./orders.model')
const userModel = require("../user/user.model")
const cartModel = require('../cart/cart.model')
const app = express.Router()

//? GET all the ordred items of the particular user
app.get("/", async(req, res) => {
    let {userId} = req.query
    console.log("Trigger", userId)
    
    try{
        let orderItems = await orderModel.find({userId}).populate('products.productId')
        let allItems = []
        let totalCost = 0
        orderItems.map((el) => {
            totalCost += el.totalCost
            allItems.push(el.products)
            return
        })
        allItems = allItems.flat(1)
        // console.log(allItems, 'ORDERITEMS')
        return res.send({
            message: "Orders fetch successfull",
            items: orderItems,
            allItems,
            totalCost
        })
    }catch(e){
        return res.status(500).send({
            message: e.message
        })
    }
})

//? POST a new order for a particular User
app.post("/new-order", async(req,res) => {
    let {userId, totalCost, products, orderId} = req.body

    try{
        let order = await orderModel.create(req.body)
        await cartModel.deleteMany({userId})
        return res.send({
            message: "Order successful",
            totalCost: totalCost,
            order: order
        })
    }catch(e){
        return res.status(500).send({
            message: e.message
        })
    }
})

//? GET All orders 
//!(Only for Admin)
app.get("/all-orders", async(req, res) => {
    let {userId} = req.query
    let user = await userModel.findById(userId)
    if(!user) return res.status(404).send("User not found")
    if(user.role != "Admin"){
        return res.status(401).send({
            message: "Unauthorized!"
        })
    }
    try{
        let data = await orderModel.find({}).populate('products.productId')
        let arr = []
        for(var i = 0; i<data.length; i++){
            arr.push(...data[i].products)
        }
        return res.send({
            message: "Fetched all orders successfully",
            orders: arr
        })
    }catch(e){
        return res.status(500).send({
            message: "Something went wrong"
        })
    }
})


module.exports = app