const express = require('express')
const sellerModel = require('./seller.model')
const userModel = require('../user/user.model')
const app = express.Router()

//? GET all sellers data
//! Only accessable for ADMIN
app.get("/", async(req,res) => {
    let {userId} = req.body

    try{
        let user = await userModel.findOne({_id: userId})
        if(user.role == "Admin"){
            let sellers = await sellerModel.find({}).populate("userId")
            return res.send({
                message: "Sellers fetched successfully",
                seller: sellers
            })
        }else{
            return res.status(401).send({
                message: "Unauthorized access"
            })
        }

    }catch(e){
        return res.status(500).send({
            message: "Something went wrong",
            desc: e.message
        })
    }
})

//? POST for becoming a seller OR if already seller then revert back to buyer
//! Only accessable for BUYERS & SELLERS (as only buyers can become a seller)
app.post("/become", async(req,res) => {
    let {storeName, userId} = req.body
    if(user.role == "Admin"){
        return res.status(403).send({
            message: "Hey!, you are already ADMIN"
        })
    } 
    try{
        let user = await userModel.findById(userId)

        if(user.role == "Buyer"){
            let store = await sellerModel.create({userId, storeName})
            return res.send({
                message: "Store created",
                details: store
            })
        }else if(user.role == "Seller"){

        }

    }catch(e){
        return res.status(500).send({
            message: e.message
        })
    }
})

module.exports = app