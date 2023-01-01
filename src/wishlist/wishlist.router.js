const express = require('express')
const wishlistModel = require('./wishlist.model')
const app = express.Router()

//? GET all the cart items of the particular user
app.get("/", async(req, res) => {
    let {userId} = req.query
    
    try{
        let wishlistItems = await wishlistModel.find({userId: userId}).populate("productId")
        return res.send({
            message: "Wishlist fetch successfull",
            items: wishlistItems
        })
    }catch(e){
        return res.status(500).send({
            message: e.message
        })
    }
})

//? POST a new cart item for a particular User
//! This API also removes the product from wishlist if it is already added
app.post("/new-item", async(req,res) => {
    let {userId, productId} = req.body

    try{
        let checkItem = await wishlistModel.findOne({userId, productId})
        if(!checkItem){
            await wishlistModel.create({userId, productId})
            return res.send({
                message: "Item added to wishlist"
            })
        }else{
            await wishlistModel.deleteOne({userId, productId})
            return res.send({
                message: "Item removed from wishlist"
            })
        }
    }catch(e){
        return res.status(500).send({
            message: e.message
        })
    }
})


//? DELETE the cart item for the particular User
// app.delete("/remove-cart", async(req, res) => {
//     let {userId, productId} = req.headers

//     try{
//         let item = await wishlistModel.deleteOne({userId, productId})
//         if(!item){
//             return res.status(403).send({
//                 message: "Something went wronge while removing item"
//             })
//         }

//         return res.send({
//             message: "Item removed successfully"
//         })
//     }catch(e){
//         return res.status(500).send({
//             message: "Something went wrong"
//         })
//     }

// })


module.exports = app