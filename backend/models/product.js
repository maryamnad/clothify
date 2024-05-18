const mongoose=require('mongoose')

const ProductSchema = new mongoose.Schema({
    title: String,
    price: Number,
    stock: Number,
    category: String,
    link: String
  }, { collection: 'Product' }); // Specify the collection name as 'teams'
  
  // Create a Mongoose model for the 'teams' collection
  const Product = mongoose.model("Product", ProductSchema);
  module.exports=Product