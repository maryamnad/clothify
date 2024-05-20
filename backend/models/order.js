const mongoose=require('mongoose')

const OderSchema = new mongoose.Schema({
  title: String,
  price: Number,
  stock: Number,
  category: String,
  sale: Number,
  onsale: Boolean,
  link: String,
  date: Date,
  status: String,
  mode: String
  }, { collection: 'Order' }); // Specify the collection name as 'teams'
  
  // Create a Mongoose model for the 'teams' collection
  const Order = mongoose.model("Order", OderSchema);
  module.exports=Order