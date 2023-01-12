const router = require("express").Router()
const User = require("../models/User")

//REGISTER
 //TODO: handle errors if username, email... is not send. Status 400: please fill in your email, username...
router.post("/register", async (req, res) => {
    const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    })

    try{
        const savedUser = await newUser.save()
        res.status(201).json(savedUser)
    }catch(err){
        res.status(500).json(err)
    }
})

module.exports = router