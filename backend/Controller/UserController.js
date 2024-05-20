const User = require("../models/user");
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');
const JWT_SECRET_KEY = "MyKey";

const signup = async (req,res) => {

    const { Name, Email, Password } = req.body;
    console.log(req.body)
    let existingUser;
    try {
        existingUser = await User.findOne({Email});
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
    const { Email, Password } = req.body;
  
    try {
      // Check if user with provided email exists
      const existingUser = await User.findOne({ Email });
      
      if (!existingUser) {
        return res.status(400).json({ message: 'User not found, Please sign up.' });
      }
  
      // Compare the provided password with the hashed password stored in the database
      const isPasswordCorrect = await bcrypt.compare(Password, existingUser.Password);
  
      if (!isPasswordCorrect) {
        return res.status(400).json({ message: 'Invalid Email/Password' });
      }
  
      // Generate JWT token
      const token = jwt.sign({ id: existingUser._id }, JWT_SECRET_KEY, {
        expiresIn: '1h' // Token expiry time
      });
  
      // Set the token as a cookie (optional, depends on your authentication strategy)
      res.cookie('token', token, {
        httpOnly: true,
        sameSite: 'strict',
        // Other cookie options like 'secure' can be added if using HTTPS
      });
  
      // Return success message along with user data and token
      res.status(200).json({ message: 'Successfully Logged In', user: existingUser, token });
    } catch (error) {
      console.error('Error during login:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  };

  const verifyToken = (req, res, next) => {
    // Extract the token from the Authorization header
    const authHeader = req.headers['authorization'];
    if (!authHeader) {
      return res.status(401).json({ message: "Authorization header missing" });
    }
  
    const token = authHeader.split(' ')[1];
    if (!token) {
      return res.status(401).json({ message: "Token not found" });
    }
  
    // Verify the token
    jwt.verify(token, JWT_SECRET_KEY, (err, user) => {
      if (err) {
        return res.status(403).json({ message: "Invalid token" });
      }
      req.id = user.id; // Attach the user ID to the request object
      next(); // Proceed to the next middleware or route handler
    });
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
    jwt.verify(String(prevToken), JWT_SECRET_KEY, (err,user) => {
        if (err){
            console.log(err);
            return res.status(403).json({message: "Authentication failed"});
        }
        res.clearCookie(`${user.id}`);
        req.cookies[`${user.id}`] = "";

        const token = jwt.sign({id: user.id}, JWT_SECRET_KEY, {
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

const changePassword = async (req, res) => {
    const userId = req.id;
    const { currentPassword, newPassword } = req.body;
  
    try {
      // Find the user by ID
      const user = await User.findById(userId);
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
  
      // Check if current password is correct
      const isMatch = await bcrypt.compare(currentPassword, user.Password);
      if (!isMatch) {
        return res.status(400).json({ message: "Current password is incorrect" });
      }
  
      // Hash the new password
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(newPassword, salt);
  
      // Update the user's password
      user.Password = hashedPassword;
      await user.save();  
      return res.status(200).json({ message: "Password updated successfully" });
    } catch (error) {
      return res.status(500).json({ message: "Server error", error: error.message });
    }
  };

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

  const updateuser = async (req, res) => {
    const userId = req.id;
    const { name, phone, email, postal, address, city } = req.body;
  
    try {
      // Find the user by ID
      const user = await User.findById(userId);
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
  
      // Update user fields
      user.Name = name || user.Name;
      user.Phone = phone || user.Phone;
      user.Email = email || user.Email;
      user.PostalCode = postal || user.PostalCode;
      user.Address = address || user.Address;
      user.City = city || user.City;
  
      // Save updated user
      const updatedUser = await user.save();
      return res.status(200).json({ message: "User updated successfully", user: updatedUser });
    } catch (error) {
      return res.status(500).json({ message: "Server error", error: error.message });
    }
  };
  

exports.logout = logout;
exports.signup = signup;
exports.login = login;
exports.verifyToken = verifyToken;
exports.getUser = getUser;
exports.refreshToken = refreshToken;
exports.getcustomer = getcustomer;
exports.updateuser=updateuser
exports.changePassword=changePassword

