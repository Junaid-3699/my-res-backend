const Order = require("../models/orderModel");

const getHome = async(req, res) => {
    try {
        res.status(200).send('Welcome from route-controller')
    } catch (error) {
        console.log(error);
    }
}

const newOrder = async(req, res) => {
    const {order} = req.body
    // console.log(req.body);
    try {
        const user_id = req.user._id
        const dbOrder = await Order.create({order, user_id})
        if(!dbOrder) {
            res.status(400)
            throw new Error('Couldnt save order')
        }
        res.status(201).json(dbOrder)
    } catch (error) {
        res.status(400).send(error)
    }
}

const getOrders = async(req, res) => {
    try {
        const user_id = req.user._id
        const orders = await Order.find({ user_id })
        res.status(200).send(orders)
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    getHome,
    newOrder,
    getOrders
}