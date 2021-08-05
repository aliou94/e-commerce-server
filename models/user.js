const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const userSchema = new Schema({
    firstName: {
        type: String,
        required: true,
        unique: true
    },
    lastName: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    address:{
        type: String,
        required: true,
        unique: true
    },
    payementMethod:{
        type: String
    }
 
}, {
    timestamps: true
});

const Users = mongoose.model('Products', usersSchema);

module.exports = Users;