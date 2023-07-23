const mongoose = require('mongoose')

const orderSchema = new mongoose.Schema({
    order : {
        Burgers : Array,
        Fries : Array,
        Wraps: Array,
        Pizzas : Array,
        Biryani : Array,
        'Fried Rice' : Array,
        'Veg Biryani': Array,
        'South Meals' : Array,
        'North Meals' : Array,
        'Tandoori Chicken' : Array,
        'Grill Chicken' : Array,
        Mango : Array,
        'Cold Coffee' : Array,
        Coffee : Array,
        Pepsi : Array
    },
    user_id : {
        type : String,
        required : true
    }
})

const Order = mongoose.model('Order', orderSchema)

module.exports = Order