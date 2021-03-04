import React, { useReducer } from 'react';
import axios from 'axios';
import ProductContext from './productContext';
import productReducer from './productReducer';

import {
  GET_PRODUCTS,
  LOAD_PRODUCTS,
  ADD_PRODUCT,
  DELETE_PRODUCT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_PRODUCT,
  FILTER_PRODUCTS,
  CLEAR_PRODUCTS,
  CLEAR_FILTER,
  PRODUCT_ERROR,
} from '../types';

// Get Cart Total Amount
export const getCartTotal = cart =>
  cart?.reduce((amount, item) => item.price + amount, 0);

const ProductState = props => {
  const initialState = {
    products: [],
    cartItems: [],
    filtered: null,
    error: null,
  };

  const [state, dispatch] = useReducer(productReducer, initialState);

  // Get All Products
  const getAllProducts = async () => {
    try {
      const res = await axios.get('/api/products');
      dispatch({
        type: GET_PRODUCTS,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: PRODUCT_ERROR,
        payload: err.response.msg,
      });
    }
  };

  // User manipulations

  // Add Product to Cart
  const addToCard = async product => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    try {
      const res = await axios.post('/api/items', product, config);

      dispatch({
        type: ADD_PRODUCT,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: PRODUCT_ERROR,
        payload: err.response.msg,
      });
    }
  };

  // Removie Product from Cart
  const removeFromCart = async id => {
    console.log(id);

    try {
      await axios.delete(`/api/items/${id}`);

      dispatch({
        type: DELETE_PRODUCT,
        payload: id,
      });
    } catch (err) {
      dispatch({
        type: PRODUCT_ERROR,
        payload: err.response.msg,
      });
    }
  };

  // Load Saved Product from DB
  const loadProducts = async () => {
    try {
      const res = await axios.get('/api/items');

      dispatch({
        type: LOAD_PRODUCTS,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: PRODUCT_ERROR,
        payload: err.response.msg,
      });
    }
  };

  return (
    <ProductContext.Provider
      value={{
        products: state.products,
        cartItems: state.cartItems,
        filtered: state.filtered,
        error: state.error,
        getAllProducts,
        addToCard,
        loadProducts,
        removeFromCart,
        getCartTotal,
      }}
    >
      {props.children}
    </ProductContext.Provider>
  );
};

export default ProductState;
