const mongoose=require('mongoose')

const UserSchema = new mongoose.Schema({
    Name: {
      type: String,
      required: true
    },
    Email: {
      type: String,
      required: true,
      unique: true
    },
    Password: {
      type: String,
      required: true,
      minlength: 8
    }
  }, { collection: 'Users' }); // Specify the collection name as 'teams'
  
  // Create a Mongoose model for the 'teams' collection
  const User = mongoose.model("Users", UserSchema);
  module.exports=User