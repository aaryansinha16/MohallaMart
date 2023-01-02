const express = require('express')
const productModel = require('./product.model')
const userModel = require("../user/user.model")
const app = express.Router()

//? GET All Products
app.get('/', async (req, res) => {
    let products = await productModel.find({})
    if(products.length == 0) return res.status(403).send({
        message: "There are no products"
    })
    try{
        return res.send({
            message: "Products fetched successfully",
            prod: products
        })
    }catch(e){
        return res.status(403).send({
            message: "Something went wrong while fetching products"
        })
    }
})

//? GET Single Product(by Id)
app.get('/single-product', async(req, res) => {
    let {q} = req.query

    try{
        let product = await productModel.findById(q)
        return res.send({
            message: "Product successfully fetched", 
            prod: product
        })
    }catch(e){
        return res.status(403).send({
            message: "Something went wrong while fetching"
        })
    }
})

//? GET Query search for products(for Search Section)
app.get('/search', async(req, res) => {
    let {title} = req.query;
    try {
        let products = await productModel.find({ "title" : { "$regex": title , "$options": "i" } },);
        res.send(products)
        
    }catch (e) {
        res.status(500).send(e.message);
    }
})

//? POST Create a new Product(for sellers & admin only)
app.post("/create-product", async(req, res) => {
    let {title, price, quantity, image, userId} = req.body

    let user = await userModel.findById(userId)
    if(user.role != "Seller" || user.role != "Admin"){
        return res.status(401).send({
            message: "Only seller can create products"
        })
    }

    try{
        let product = await productModel.create(req.body)
        return res.send({
            message: "Created product successfully",
            prod: product,
            seller: user
        })
    }catch(e){
        return res.status(403).send({
            message: "Something went wrong while creating product, try again later"
        })
    }
})


//? PATCH Updating the price of the product (for Seller & Admin Only)
app.patch("/update-price", async(req, res) => {
    let {productId, price, userId} = req.body

    let user = await userModel.findById(userId)
    if(user.role != "Seller" || user.role != "Admin"){
        return res.status(401).send({
            message: "Only seller can create products"
        })
    }

    try{
        let product = await productModel.updateOne({_id: productId}, {price: price})
        return res.send({
            message: "Updated price successfully",
            update: product
        })
    }catch(e){
        return res.status(403).send({
            message: "Something went wrong while updating the product"
        })
    }
})


module.exports = app