const express = require('express');
const mongoose = require('mongoose')
const Cors = require('cors')
const connectToDB = require('./config/db')
const dotenv = require('dotenv').config()
const orderRouter = require('./routes/orderRoutes') 
const userRouter = require('./routes/userRoutes')


const app = express();
const port = process.env.PORT || 8000;

//Middleware
app.use(express.json())
app.use(Cors())

//DB connection
connectToDB()


app.use('/api/user', userRouter)
app.use('/', orderRouter)



app.listen(port, () => {
    console.log(`Server is up on port ${port}`);
})