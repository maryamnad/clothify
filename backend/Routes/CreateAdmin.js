const express = require('express');
const adminrouter = express.Router();
const Admin = require('../models/admin');

adminrouter.post("/api/CreatAdmin", async (req, res) => {
    try {
        const adminData = req.body; // AssumingAdmin data is sent in the request body
        const admin = await Admin.create(adminData);
        console.log("Admin created:", admin);
        res.json({ success: true, admin });
    } catch (error) {
        console.error("Error creatingAdmin:", error);
        res.status(500).json({ success: false, error: error.message });
    }
});

module.exports = adminrouter;
