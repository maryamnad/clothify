const mongoose=require('mongoose')

const ProductSchema = new mongoose.Schema({
    ID: Number,
    Name: String,
    Category: String,
    Price: Number,
    Quantity: Number
  }, { collection: 'Product' }); // Specify the collection name as 'teams'
  
  // Create a Mongoose model for the 'teams' collection
  const Product = mongoose.model("Product", ProductSchema);
  module.exports=Product