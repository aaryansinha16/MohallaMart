const express = require('express')
const http = require('http')
const {Server} = require('socket.io')
const reviewModel = require("./reviews.model")
const app = express.Router()

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

app.get("/", async(req, res) =>{
    res.send("Working")
})


module.exports = app