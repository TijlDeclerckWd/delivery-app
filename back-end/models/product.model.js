const mongoose = require('mongoose');

const { Schema } = mongoose;

const ProductSchema = new Schema({
  title: {
    type: String,
    trim: true
  },
});

const Product = mongoose.model('Product', ProductSchema);

module.exports = Product;
