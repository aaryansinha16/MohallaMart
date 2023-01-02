const express = require('express')
const http = require('http')
const {Server} = require('socket.io')
const reviewModel = require("./reviews.model")
const app = express.Router()


module.exports = app