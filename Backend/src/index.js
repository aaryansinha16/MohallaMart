const express = require('express')
const cors = require('cors')
const dbConnect = require('./config/db')

const http = require('http')
const {Server} = require('socket.io')
const reviewModel = require("./reviews/reviews.model")

const UserRouter = require('./user/user.router')
const ProductRouter = require('./product/product.router')
const CartRouter = require("./cart/cart.router")
const WishlistRouter = require('./wishlist/wishlist.router')
const OrderRouter = require("./orders/orders.router")
const SellerRouter = require('./seller/seller.router')
const ReviewRouter = require('./reviews/reviews.router')
const RazorpayRouter = require("./razorpay/razorpay")
const productModel = require('./product/product.model')

const app = express()
app.use(express.json())
app.use(cors())

app.get("/", (req, res) => {
    res.send("Working fine")
})

app.use("/user", UserRouter)
app.use("/products", ProductRouter)
app.use("/cart", CartRouter)
app.use("/wishlist", WishlistRouter)
app.use("/orders", OrderRouter)
app.use("/seller", SellerRouter)
// app.use("/reviews", ReviewRouter)
app.use("/razorpay", RazorpayRouter)

const server = http.createServer(app)
const io = new Server(server, {
    cors: {
        origin: "http://localhost:5173"
    }
})

var totalUser = 0
io.on("connection", (conn) => {
    totalUser += 1
    console.log("CONNECT", totalUser)

    conn.on('new review', async ({rating, review, userId, productId}) => {
        if(review == ""){
            let reviews = await reviewModel.find({productId}).populate("userId")
            io.emit("new review", {reviews, avgRating : undefined})
            return
        }
        let data = await reviewModel.create({rating, review, userId, productId})

        let allRatings = await reviewModel.find({productId})
        let avgRating = 0
        var sum = 0
        for(var i = 0; i<allRatings.length; i++){
            sum += allRatings[i].rating
        }
        // console.log(sum , allRatings.length, sum/allRatings.length)
        avgRating = sum / allRatings.length
        let test = await productModel.findByIdAndUpdate(productId, {ratings: Math.floor(avgRating)}, {new : true})
        // console.log('AVERAGE',test, avgRating, sum )
        // console.log("Not happening")
        // console.log('DATA FROM FRONTEND',rating, review, userId, productId)
        let reviews = await reviewModel.find({productId}).populate("userId")
        io.emit("new review", {reviews, avgRating})
    })

    conn.on("disconnect", () => {
        totalUser -= 1
        console.log("DISCONNECT", totalUser)
    })
})

server.listen(3000, async () => {
    await dbConnect()
    console.log(`listening the server on http://localhost:3000`)
})