const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users',
  },
  imgPath: {
    type: String,
  },
  title: {
    type: String,
  },
  desc: {
    type: String,
  },
  category: {
    type: String,
  },
  price: {
    type: Number,
  },
  qty: {
    type: Number,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('product', ProductSchema);
