const mongoose = require('mongoose');
const { Schema } = mongoose;


const productSchema = new Schema({

    brand: {
        type: String,
        required: [true, "Please enter product Brand"]
    },
    name: {
        type: String,
        required: [true, "Please enter product Name"]
    },
    category: {
        type: String,
        required: [true, "Please enter product Category"]
    },
    price: {
        type: Number,
        required: [true, "Please enter product Price"]
    },
    stock: {
        type: Number,
        required: [true, "Please enter product Stock"]
    }

}, { timestamps: true });




const Product = mongoose.model('Product', productSchema);

module.exports = Product;