const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    Name: {
        type: String,
        required: true,
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
    },
    Phone: {
        type: String,
        default: 'Unknown' // Default value for Phone
    },
    PostalCode: {
        type: Number,
        default: 0 // Default value for PostalCode
    },
    Address: {
        type: String,
        default: 'Not provided' // Default value for Address
    },
    City: {
        type: String,
        default: 'Unknown' // Default value for City
    },
    Role:
    {
        type: String,
        required: true
    }
}, { collection: 'Users' });

// Create a Mongoose model for the 'Users' collection
const User = mongoose.model('Users', UserSchema);
module.exports = User;