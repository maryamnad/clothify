// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");

// const app = express();
// const PORT = process.env.PORT || 5000;

// // Middleware
// app.use(cors());
// app.use(express.json());


// // Connect to MongoDB
// mongoose.connect("mongodb://localhost:27017/Clothify", {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// const connection = mongoose.connection;
// connection.once("open", () => {
//   console.log("Connected to MongoDB database");
// });

// // Define leaderboard schema
// const User=require('./models/user')
// const Admin=require('./models/admin')
// const Order=require('./models/order')
// const Product=require('./models/product')

// // API to fetch leaderboard data
// app.get("/getuser", async (req, res) => {
//   try {
//     const data = await User.find();
//     res.json(data);
//     console.log("Done")
//   } catch (err) {
//     console.error(err); // Print any errors to the console for debugging
//     res.status(500).json({ message: "Internal Server Error" });
//   }
// });

// app.get("/getadmin", async (req, res) => {
//     try {
//       const data = await Admin.find();
//       res.json(data);
//       console.log("Done")
//     } catch (err) {
//       console.error(err); // Print any errors to the console for debugging
//       res.status(500).json({ message: "Internal Server Error" });
//     }
//   });

// app.get("/getproduct", async (req, res) => {
// try {
//     const data = await Product.find();
//     res.json(data);
//     console.log("Done")
// } catch (err) {
//     console.error(err); // Print any errors to the console for debugging
//     res.status(500).json({ message: "Internal Server Error" });
// }
// });

// app.get("/getorder", async (req, res) => {
// try {
//     const data = await Order.find();
//     res.json(data);
//     console.log("Done")
// } catch (err) {
//     console.error(err); // Print any errors to the console for debugging
//     res.status(500).json({ message: "Internal Server Error" });
// }
// });

// const userrouter=require('./Routes/CreateUser')
// app.use(userrouter);
// const adminrouter=require('./Routes/CreateAdmin')
// app.use(adminrouter);
// const productrouter=require('./Routes/CreateProduct')
// app.use(productrouter);
// const orderrouter=require('./Routes/CreateOrder')
// app.use(orderrouter);

const express = require('express');
const mongoose = require('mongoose');
const router = require('./Routes/CreateUser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
require('dotenv').config();
const app = express();
app.use(cors({credentials: true, origin:"http://localhost:3000"}));
app.use(cookieParser());
app.use(express.json());
app.use("/api", router);
mongoose.connect("mongodb://localhost:27017/Clothify")
    .then(()=> {
        app.listen(5000);
        console.log("Listening to the port 5000")
    })
    .catch((err) => console.log(err));



