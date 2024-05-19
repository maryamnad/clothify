const mongoose=require('mongoose')

const CartSchema = new mongoose.Schema({
    clothid: String,
    title: String,
    price: Number,
    stock: Number,
    category: String,
    sale: Number,
    onsale: Boolean,
    link: String,
    userid: String
  }, { collection: 'Cart' }); // Specify the collection name as 'teams'
  
  // Create a Mongoose model for the 'teams' collection
  const Product = mongoose.model("Cart", CartSchema);
  module.exports=Product