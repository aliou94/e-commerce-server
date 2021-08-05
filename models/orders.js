const mongoose = require('mongoose');
const Schema = mongoose.Schema;
require('mongoose-currency').loadType(mongoose);
const Currency = mongoose.Types.Currency;


const orderSchema = new Schema({
    firstname: {
        type: String,
        required: true,
        unique: true
    },
    lastname: {
        type: String,
        required: true,
        unique: true
    },
    deliveryAddress:{
        type: String,
        required: true,
        unique: true
    },
    payementMethod:{
        type: String
    },
    cost: {
        type: Currency,
        required: true,
        min: 0
    },
}, {
    timestamps: true
});

const Orders = mongoose.model('Products', orderSchema );

module.exports = Orders;