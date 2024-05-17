const express = require('express');
const orderrouter = express.Router();
const Order = require('../models/order');

orderrouter.post("/api/Createorder", async (req, res) => {
    try {
        const orderData = req.body; // Assuming order data is sent in the request body
        const order = await Order.create(orderData);
        console.log("order created:", order);
        res.json({ success: true, order });
    } catch (error) {
        console.error("Error creating order:", error);
        res.status(500).json({ success: false, error: error.message });
    }
});

module.exports = orderrouter;
