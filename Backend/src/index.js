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
        let data = await reviewModel.create({rating, review, userId, productId})
        console.log('DATA FROM FRONTEND',rating, review, userId, productId)

        io.emit("new review", data)
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