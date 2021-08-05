const mongoose = require('mongoose');
const Schema = mongoose.Schema;
require('mongoose-currency').loadType(mongoose);
const Currency = mongoose.Types.Currency;


const commentSchema = new Schema({
    rating: {
        type: Number,
        min: 1,
        max: 5,
        required: true
    },
    text: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    }
}, 
{
    timestamps: true
});

const productSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    review: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    cost: {
        type: Currency,
        required: true,
        min: 0
    },
    comments: [commentSchema]
}, {
    timestamps: true
});

const Products = mongoose.model('Products', productSchema);

module.exports = Products;