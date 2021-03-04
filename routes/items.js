const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');

const CartItems = require('../models/CartItems');

// @route     POST api/cardItems
// @desc      Add new item to Card
// @access    Private
router.post('/', auth, async (req, res) => {
  const { imgPath, title, desc, category, price, qty } = req.body;

  try {
    const newItem = new CartItems({
      imgPath,
      title,
      desc,
      category,
      price,
      qty,
      user: req.user.id,
    });

    const item = await newItem.save();
    res.json(item);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route     GET api/items
// @desc      Load all products from DB
// @access    Private
router.get('/', auth, async (req, res) => {
  try {
    const products = await CartItems.find({ user: req.user.id }).sort({
      date: -1,
    });
    res.json(products);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route     GET api/items
// @desc      Get product item
// @access    Private
router.get('/', auth, async (req, res) => {
  try {
    const item = await CartItems.findById(req.params.id);
    res.json(item);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route     DELETE api/items/:id
// @desc      Delete product from cart
// @access    Private
router.delete('/:id', auth, async (req, res) => {
  try {
    let product = await CartItems.findById(req.params.id);

    if (!product) return res.status(404).json({msg: 'product not found'});

    // Make sure user owns contact
    if (product.user.toString() !== req.user.id) {
      return res.status(401).json({msg: 'Not authorized'});
    }

    await CartItems.findByIdAndRemove(req.params.id);

    res.json({msg: 'Contact removed'});
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;


// new Shit going on 