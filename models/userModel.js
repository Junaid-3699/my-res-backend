const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const validator = require('validator')

const Schema = mongoose.Schema

const userSchema = new Schema({
    name :  {
        type :String,
        required : true
    },
    email : {
        type : String,
        required : true,
        unique : true
    },
    password : {
        type : String,
        required : true
    }
})

//static method signup
userSchema.statics.signup = async function(name, email, password) {
    if(!name || !email || !password) {
        throw Error('All fields are mandatory')
    }

    if(!validator.isEmail(email)) {
        throw Error('Email is invalid')
    }

    if(!validator.isStrongPassword(password)) {
        throw Error('Password is not strong enough!!Make sure your password has a lowerCase letter, upperCase letter, number and symbol')
    }

    const exists = await this.findOne({ email })
    if(exists) {
        throw Error('Email already exists!! Please use another Email')
    }
    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(password, salt)

    const user = await this.create({name, email, password : hash})

    return user
}

//static method login
userSchema.statics.login = async function(email, password) {
    if(!email || !password) {
        throw Error('All fields are mandatory')
    }
    if(!validator.isEmail(email)) {
        throw Error('Enter a valid Email id')
    }
    const user = await this.findOne( { email })
    if(!user) {
        throw Error('User doesnt exists! Check your Email Id or Please SignUp first')
    }

    const bool = await bcrypt.compare(password, user.password)
    if(!bool) {
        throw Error('Incorrect Password')
    }
   
    return user
}

module.exports = mongoose.model('User', userSchema)
