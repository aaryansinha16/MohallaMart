const express = require('express')
const http = require('http')
const {Server} = require('socket.io')
const productModel = require('../product/product.model')
const reviewModel = require("./reviews.model")
const app = express.Router()

// const server = http.createServer(app)
// const io = new Server(server, {
//     cors: {
//         origin: "http://localhost:5173"
//     }
// })

// var totalUser = 0
// io.on("connection", (conn) => {
//     totalUser += 1
//     console.log("CONNECT", totalUser)

//     conn.on('new review', async ({rating, review, userId, productId}) => {
//         console.log('TESTINGGGDKASLKDF');
        
//         let data = await reviewModel.create({rating, review, userId, productId})
//         // console.log('DATA FROM FRONTEND',rating, review, userId, productId)
//         let allRatings = await reviewModel.find({productId})
//         let avgRating = 0
//         var sum = 0
//         for(var i = 0; i<allRatings.length; i++){
//             sum += allRatings[i].rating
//         }
//         avgRating = sum / allRatings.length
//         let test = await productModel.findOneAndUpdate({_id: productId}, {rating: avgRating})
//         // console.log("TEST", test, avgRating, sum , allRatings)
//         io.emit("new review", data)
//     })

//     conn.on("disconnect", () => {
//         totalUser -= 1
//         console.log("DISCONNECT", totalUser)
//     })
// })

// app.get("/", async(req, res) =>{
//     res.send("Working")
// })


module.exports = app