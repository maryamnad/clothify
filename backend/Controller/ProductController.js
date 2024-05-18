const Product = require("../models/product");


const newprod = async (req,res) => {
    console.log(req.body)
    const prod = new Product({
        title: req.body.title,
        price: req.body.price,
        stock: req.body.stock,
        category: req.body.category
    });
    try {
    
        await prod.save();
    } catch (err) {
        console.log(err);
    }
}

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
  

exports.newprod = newprod;
exports.getprod = getprod;
exports.updateprod = updateprod;
exports.deleteprod = deleteprod;