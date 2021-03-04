const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { check, validationResult } = require('express-validator');

const User = require('../models/User');
const Product = require('../models/Product');

// @route     GET api/products
// @desc      Get all products from DB
// @access    Private
router.get('/', async (req, res) => {
  try {
    const products = await Product.find({}).sort({
      date: -1,
    });
    res.json(products);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route     POST api/products
// @desc      Add new product to DB
// @access    Private
router.post('/', async (req, res) => {
  const { imgPath, title, desc, category, price, qty } = req.body;

  try {
    const newProduct = new Product({
      imgPath,
      title,
      desc,
      category,
      price,
      qty,
    });

    const product = await newProduct.save();
    console.log(product);
    res.json(product);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route     PUT api/products/:id
// @desc      Update product
// @access    Private
router.put('/:id', auth, async (req, res) => {
  res.send('Update product');
});

// @route     DELETE api/contacts/:id
// @desc      Delete product
// @access    Private
router.delete('/:id', auth, async (req, res) => {
  res.send('Delete product');
});

module.exports = router;
