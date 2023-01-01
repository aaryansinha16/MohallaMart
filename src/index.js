const express = require('express')
const cors = require('cors')
const dbConnect = require('./config/db')
const UserRouter = require('./user/user.router')
const ProductRouter = require('./product/product.router')
const CartRouter = require("./cart/cart.router")
const WishlistRouter = require('./wishlist/wishlist.router')
const OrderRouter = require("./orders/orders.router")

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

app.listen(3000, async () => {
    await dbConnect()
    console.log(`listening the server on http://localhost:3000`)
})