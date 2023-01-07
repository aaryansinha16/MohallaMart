const express = require('express')
const http = require('http')
const {Server} = require('socket.io')
const reviewModel = require("./reviews.model")
const app = express.Router()

const server = http.createServer(app)
const io = new Server({
    cors: {
        origin: "http://localhost:5173"
    }
})

var totalUser = 0
io.on("connection", (conn) => {
    totalUser += 1
    console.log("CONNECT", totalUser)

    conn.on("disconnect", () => {
        totalUser -= 1
        console.log("DISCONNECT", totalUser)
    })
})

app.get("/", async(req, res) =>{
    res.send("Working")
})


module.exports = app