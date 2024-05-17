const mongoose=require('mongoose')

const AdminSchema = new mongoose.Schema({
    ID: Number,
    UserName: String,
    Email: String,
    Password: String
  }, { collection: 'Admin' }); // Specify the collection name as 'teams'
  
  // Create a Mongoose model for the 'teams' collection
  const Admin = mongoose.model("Admin", AdminSchema);
  module.exports=Admin