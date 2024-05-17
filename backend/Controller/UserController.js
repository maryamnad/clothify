const User = require("../models/user");
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');
const JWT_SECRET_KEY = "MyKey";

const signup = async (req,res) => {

    const { Name, Email, Password } = req.body;
    console.log(req.body)
    let existingUser;
    try {
        existingUser = await User.findOne({Email: Email});
    } catch (err) {
        console.log(err);
    }
    if (existingUser) {
        return res.status(400).json({message: "user already exists"})
    }
    console.log(Password)
    const hashedPassword = bcrypt.hashSync(Password);
    const user = new User({
        Name: req.body.Name,
        Email: req.body.Email,
        Password: hashedPassword
    });
    try {
        await user.save();
    } catch (err) {
        console.log(err);
    }
    return res.status(201).json({message: user})
}

const login = async (req, res) => {
    const { email, password } = req.body;
    
    let existingUser;
    try {
        existingUser = await User.findOne({email: email});
    } catch (err) {
        console.log(err);
    }
    if (!existingUser) {
        return res.status(400).json({message: "User not found, Please sign up."})
    }
    const isPasswordCorrect = bcrypt.compareSync(password, existingUser.password);
    if(!isPasswordCorrect){
        return res.status(400).json({message: "Invaild Email/Password"})
    }
    const token = jwt.sign({id: existingUser._id}, process.env.JWT_SECRET_KEY,{
        expiresIn: "35s" //1hr
    });
    console.log("Generated Token\n", token);
    if (req.cookies[`${existingUser._id}`]) {
        req.cookies[`${existingUser._id}`] = ""
    }
    res.cookie(String(existingUser._id), token, {
        path:"/",
        expires: new Date(Date.now() + 1000 * 30),
        httpOnly: true,
        sameSite: "lax",
    })

    return res
    .status(200)
    .json({message: "Successfully Logged In", user: existingUser, token});
}

const verifyToken = (req,res,next) => {
    // const cookies = req.headers.cookie;
    // const token = cookies.split('=')[1];
    // console.log(token);
    // const headers = req.headers['authorization'];
    // const token = headers.split(" ")[1];
    
    const cookies = req.cookie;
    
    // Check if cookies exist
    if (!cookies) {
        return res.status(404).json({ message: "Cookies not found" });
    }
    // Split the cookies string to extract the token
    const token = cookies.split('=')[1];
    if (!token) {
        return res.status(404).json({ message: "Token not found" });
    }
    if (!token){
        return res.status(404).json({message: "Token not found"});
    }
    jwt.verify(String(token), process.env.JWT_SECRET_KEY, (err,user) => {
        if (err){
            return res.status(400).json({message: "Invalid Token"})
        }
        console.log(user.id);
        req.id = user.id;
    });
    next();
};

const getUser = async(req, res, next) => {
    const userId = req.id;
    let user;
    try{
        user = await User.findById(userId, "-password");
    } catch (err) {
        return new Error(err)
    }
    if (!user) {
        return res.status(404).json({message: "User not found"})
    }
    return res.status(200).json({user});
}

const refreshToken = (req,res,next) => {
    const cookies = req.headers.cookie;
    const prevToken = cookies.split('=')[1];
    if (!prevToken) {
        return res.status(400).json({message: "Couldn't find token"})
    }
    jwt.verify(String(prevToken), process.env.JWT_SECRET_KEY, (err,user) => {
        if (err){
            console.log(err);
            return res.status(403).json({message: "Authentication failed"});
        }
        res.clearCookie(`${user.id}`);
        req.cookies[`${user.id}`] = "";

        const token = jwt.sign({id: user.id}, process.env.JWT_SECRET_KEY, {
            expiresIn: "35s"
        });
        console.log("Re-generated Token\n", token);
        res.cookie(String(user.id), token, {
            path:"/",
            expires: new Date(Date.now() + 1000 * 30),
            httpOnly: true,
            sameSite: "lax",
        })
        req.id = user.id;
        next();
    });
}

const logout = (req, res) => {
    const cookies = req.headers.cookie;
    const prevToken = cookies.split('=')[1];
    if (!prevToken) {
        return res.status(400).json({message: "Couldn't find token"})
    }
    jwt.verify(String(prevToken), process.env.JWT_SECRET_KEY, (err,user) => {
        if (err){
            console.log(err);
            return res.status(403).json({message: "Authentication failed"});
        }
        res.clearCookie(`${user.id}`);
        req.cookies[`${user.id}`] = "";
        return res.status(200).json({message: "Successfully Logged Out"});
    });
    
}

const getcustomer= async (req, res) => {
    try {
      const data = await User.find();
      res.json(data);
      console.log("Done")
    } catch (err) {
      console.error(err); // Print any errors to the console for debugging
      res.status(500).json({ message: "Internal Server Error" });
    }
  };

exports.logout = logout;
exports.signup = signup;
exports.login = login;
exports.verifyToken = verifyToken;
exports.getUser = getUser;
exports.refreshToken = refreshToken;
exports.getcustomer = getcustomer;