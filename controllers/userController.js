const User = require('../models/userModel')
const jwt = require('jsonwebtoken')

//signing a jwt token
const createToken = (_id) => {
    const token = jwt.sign({_id}, 'howudoin', { expiresIn : '3d'})
    return token
}

//login 
const loginUser = async(req, res) => {
    const {email, password} = req.body
    try {
        const user = await User.login(email, password)
       const { name } = user
        //create a token
        const token = createToken(user._id)
        res.status(200).json({name, email, token})
    } catch (error) {
        res.status(400).json({ error : error.message })
    }
}

//signup
const signupUser = async(req, res) => {
    const { name, email, password } = req.body
    try {
        const user = await User.signup(name, email, password)
        //create token
        const token = createToken(user._id)
        res.status(200).json({name, email, token})
    } catch (error) {
        res.status(400).json({error : error.message})
    }
}

module.exports = {
    loginUser,
    signupUser
}