const Product = require("../models/product");
// const multer = require('multer');
const path = require('path');
const axios = require('axios'); // Import axios for making HTTP requests


const fs = require('fs');
const newprod = async (req, res) => {
  try {
    // Extract the image object from the request body
    const image = req.body.image;

    // Check if the image object exists
    if (!image) {
      return res.status(400).json({ message: 'Image object not found in request body' });
    }

    // Extract necessary information from the image object
    const imageUrl = image[0].thumbUrl; // Assuming `originFileObj` contains the image data
    const imageName = image[0].name;

    // Create a path to save the image
    const imagePath = path.join("D:/Eesha/Semester 6/Web/Project/clothify/src", imageName);
    const response = await axios.get(imageUrl, { responseType: 'arraybuffer' });
    const imageData = Buffer.from(response.data, 'base64');

    console.log(imageData)
    fs.writeFile(imagePath, imageData, async function(err) {
      if (err) {
        console.error('Error saving image:', err);
        return res.status(500).json({ message: 'Error saving image', error: err });
      }
      const { title, price, stock, category,sale } = req.body;
      var onsale=false
      if (sale!=0)
      {
        onsale=true
      }

      const prod = new Product({
        title,
        price,
        stock: 1,
        category,
        sale,
        onsale,
        link: imageName,
      });

      await prod.save();

      res.status(200).json({ message: 'Product added successfully', product: prod });
    });
  } catch (error) {
    console.error('Error adding product:', error);
    res.status(500).json({ message: 'Internal server error', error: error });
  }
};



const getprod= async (req, res) => {
    try {
      const data = await Product.find();
      res.json(data);
      console.log("Done")
    } catch (err) {
      console.error(err); // Print any errors to the console for debugging
      res.status(500).json({ message: "Internal Server Error" });
    }
  };

  const updateprod=async (req, res) => {
    const productId = req.params._id;
  const updatedProductData = req.body;

  try {
    // Find the product by ID and update it
    const updatedProduct = await Product.findByIdAndUpdate(productId, updatedProductData, { new: true });

    if (updatedProduct) {
      res.json({ success: true, message: 'Product updated successfully', updatedProduct });
    } else {
      res.status(404).json({ success: false, message: 'Product not found' });
    }
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error updating product', error: error.message });
  }
  }; 

  const deleteprod=async (req, res) => {
    try {
      const productId = req.params._id;
      const deletedProduct = await Product.findByIdAndDelete(productId);
      if (!deletedProduct) {
        return res.status(404).json({ message: "Product not found" });
      }
      res.status(200).json({ message: "Product deleted successfully", deletedProduct });
    } catch (error) {
      console.error("Error deleting product:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  };

  const increaseQuantity = async (req, res) => {
    try {
        const productId = req.id;
        console.log(productId)

        const cartItem = await Product.findById(productId)

        if (cartItem) {
            cartItem.stock += 1;
            await cartItem.save();
            // res.sta/tus(200).json({ message: 'Product quantity increased successfully', Cart: cartItem });
        } else {
            // res.status(404).json({ message: 'Product not found in cart' });
        }
    } catch (error) {
        console.error('Error increasing product quantity:', error);
        // res.status(500).json({ message: 'Internal server error', error: error });
    }
};

const decreaseQuantity = async (req, res) => {
    try {
        const productId = req.id;
        console.log(productId)

        const cartItem = await Product.findById(productId)

        if (cartItem) {
            if (cartItem.stock > 1) {
                cartItem.stock -= 1;
                await cartItem.save();
                // res.status(200).json({ message: 'Product quantity decreased successfully', Cart: cartItem });
            } else {
                await Product.findByIdAndDelete(productId);
                // res.status(200).json({ message: 'Product removed from cart as quantity is zero', Cart: cartItem });
            }
        } else {
            // res.status(404).json({ message: 'Product not found in cart' });
        }
    } catch (error) {
        console.error('Error decreasing product quantity:', error);
        // res.status(500).json({ message: 'Internal server error', error: error });
    }
};
  

exports.newprod = newprod;
exports.getprod = getprod;
exports.updateprod = updateprod;
exports.deleteprod = deleteprod;
exports.increaseQuantity = increaseQuantity;
exports.decreaseQuantity = decreaseQuantity;
