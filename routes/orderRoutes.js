const express = require('express');
const { getHome, newOrder, getOrders } = require('../controllers/orderControllers');
const requireAuth = require('../middleware/requireAuth');
const dotenv = require('dotenv').config()

const router = express.Router()

router.use(requireAuth)
router.get('/', getHome)
router.post('/order', newOrder)
router.get('/getOrders', getOrders)

module.exports = router