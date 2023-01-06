const express = require('express')
const cartModel = require('./cart.model')
const app = express.Router()

//? GET all the cart items of the particular user
app.get("/", async(req, res) => {
    let {userId} = req.query
    
    try{
        let cartItems = await cartModel.find({userId: userId}).populate("productId")
        return res.send({
            message: "Cart fetch successfull",
            items: cartItems
        })
    }catch(e){
        return res.status(500).send({
            message: e.message
        })
    }
})

//? POST a new cart item for a particular User
app.post("/new-item", async(req,res) => {
    let {userId, productId} = req.body

    try{
        let checkItem = await cartModel.findOne({userId, productId})
        if(!checkItem){
            await cartModel.create({userId, productId})
            return res.send({
                message: "Item added to cart"
            })
        }else{
            return res.send({
                message: "This product is already in the cart"
            })
        }
    }catch(e){
        return res.status(500).send({
            message: e.message
        })
    }
})

//? PATCH for updating the quantity of the products added in the cart
app.patch("/quantity", async(req, res) => {
    let {quantity, userId, productId} = req.body

    try{
        await cartModel.findOneAndUpdate({userId, productId}, {$inc : {"quantity": quantity}})
        return res.send({
            message: "Quantity updated"
        })
    }catch(e){
        return res.send({
            message: "Something went wrong"
        })
    }
})


//? DELETE the cart item for the particular User
app.delete("/remove-cart", async(req, res) => {
    let {userid, productid} = req.headers
    // console.log(req.headers)
    try{
        let item = await cartModel.deleteOne({userId : userid, productId: productid})
        if(!item){
            return res.status(403).send({
                message: "Something went wronge while removing item"
            })
        }
        // console.log('CART', userId, productId, item)
        return res.send({
            message: "Item removed successfully"
        })
    }catch(e){
        return res.status(500).send({
            message: "Something went wrong"
        })
    }
})


module.exports = app