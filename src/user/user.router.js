const express = require('express')
const userModel = require('./user.model')
const app = express.Router()

app.get('/', async(req, res) => {
    let {q} = req.query
    let user = await userModel.findById(q)
    if(user?.role != "Admin"){
        return res.status(401).send({
            message: "Not Accessable"
        })
    }
    try{
        let allUsers = await userModel.find({})
        return res.send({
            message: "Fetched users successfully",
            users: allUsers
        })
    }catch(e){
        return res.status(403).send({
            message: "Something went wrong"
        })
    }
})

app.post('/signup', async(req, res) => {
    let {username, email, password} = req.body
    let user = await userModel.find({email})
    
    if(user.length != 0){
        return res.status(403).send({
            message: "Email already exists",
            description: "Either use another email to create account OR signup using the same email"
        })
    }
    try{
        let createdUser = await userModel.create(req.body)
        return res.send({
            message: "User created successfully",
            data : createdUser
        })
    }catch(e){
        return res.status(403).send({
            message: "Something went wrong during signup, try again later"
        })
    }
})

app.post('/login', async(req, res) => {
    let {email, password} = req.body

    let user = await userModel.findOne({email})
    if(!user){
        return res.status(403).send({
            message: "Email doesn't exist's in our record",
            discription: "Either create an account using the same email OR login using other email"
        })
    }

    try{
        return res.send({
            message: "Logged In successfully",
            data: user
        })
    }catch(e){
        return res.status(403).send({
            message: "Something went wrong during login, try again later"
        })
    }

})

module.exports = app