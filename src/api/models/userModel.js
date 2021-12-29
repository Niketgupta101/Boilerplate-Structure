const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    _id: String,
    username : String,
    hashedPassword : {
        type: String,
        required: true,
    },
    emailId : {
        type: String,
        required: true,
        unique: true,
    },
    emailVerified : {
        type: Boolean,
        default: false
    },
    createdAt : {
        type: Date,
        default: new Date()
    },
    updatedAt : {
        type: Date,
        default: new Date()
    }
});

module.exports = mongoose.model("Users", userSchema);