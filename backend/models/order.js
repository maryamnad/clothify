const mongoose=require('mongoose')

const OderSchema = new mongoose.Schema({
    IDnum: Number,
    Price: Number,
    CustomerID: Number,
    OrderDate: String,
    Status: String
  }, { collection: 'Order' }); // Specify the collection name as 'teams'
  
  // Create a Mongoose model for the 'teams' collection
  const Order = mongoose.model("Order", OderSchema);
  module.exports=Order