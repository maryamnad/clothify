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

const { signup, login, verifyToken, getUser, refreshToken, logout, getcustomer,updateuser,changePassword  } = require("../Controller/UserController");
const { newprod, getprod, updateprod,deleteprod ,increaseQuantity,decreaseQuantity,addproduct,category,search} = require("../Controller/ProductController");
const {newcart,getcart,deleteCart,increaseCartQuantity,decreaseCartQuantity,clearCart} =require("../Controller/CartController")
const {neworder,getorder,getuserorder,updateorder}=require("./../Controller/OderContoller")



router.get('/', (req,res,next) => {
    res.send("hello!!");
})
router.post("/signup", signup);
router.post("/login", login);
router.get("/user", verifyToken, getUser);
router.get("/refresh", refreshToken, verifyToken, getUser);
router.post("/logout", logout);
router.put("/user/update",verifyToken, updateuser)
router.post("/newprod", newprod);
router.get("/getprod", getprod);
router.get("/category/:category", category);
router.get("/getcustomer",getcustomer)
router.put("/updateprod/:_id",updateprod)
router.delete("/deleteprod/:_id",deleteprod)
router.put('/user/change-password', verifyToken, changePassword);
router.post('/newcart',newcart,decreaseQuantity)
router.get('/user/getcart', verifyToken, getcart);

router.put('/increasecart/:_id',increaseCartQuantity,decreaseQuantity);
router.put('/decreasecart/:_id',decreaseCartQuantity,increaseQuantity);
router.delete('/deletecart/:_id',deleteCart,addproduct)
router.post('/payment',neworder,clearCart)
router.get('/order',getorder)
router.get('/user/userorder',verifyToken,getuserorder)
router.get('/search/:query',search)
router.put('/order/:_id',updateorder)
module.exports = router;