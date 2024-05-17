// const express = require('express');
// const userrouter = express.Router();
// const User = require('../models/user');
// const { body, validationResult } = require('express-validator');

// userrouter.post("/api/CreateUser",
// body('Email').isEmail(),
// body('Password','abc').isLength({min:8}),
//  async (req, res) => {
//     const errors = validationResult(req);
//     if (!errors.isEmpty()) {
//         return res.status(400).json({ success: false, error: error.message });
//     }
//     try {
//         const userData = req.body; // Assuming user data is sent in the request body
//         const user = await User.create(userData);
//         console.log("User created:", user);
//         res.json({ success: true, user });
//     } catch (error) {
//         console.error("Error creating user:", error);
//         res.status(500).json({ success: false, error: error.message });
//     }
// });

// module.exports = userrouter;

const express = require('express');
const router = express.Router();
const { signup, login, verifyToken, getUser, refreshToken, logout  } = require("../Controller/UserController");

router.get('/', (req,res,next) => {
    res.send("hello!!");
})
router.post("/signup", signup);
router.post("/login", login);
router.get("/user", verifyToken, getUser);
router.get("/refresh", refreshToken, verifyToken, getUser);
router.post("/logout", verifyToken, logout);
module.exports = router;
