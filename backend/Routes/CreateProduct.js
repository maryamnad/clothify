const express = require('express');
const productrouter = express.Router();
const Product = require('../models/product');


productrouter.post("/api/Createproduct", async (req, res) => {
    try {
        const productData = req.body; // Assuming product data is sent in the request body
        const product = await Product.create(productData);
        console.log("product created:", product);
        res.json({ success: true, product });
    } catch (error) {
        console.error("Error creating product:", error);
        res.status(500).json({ success: false, error: error.message });
    }
});

module.exports = productrouter;
