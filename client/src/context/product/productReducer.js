import {
  GET_PRODUCTS,
  ADD_PRODUCT,
  LOAD_PRODUCTS,
  DELETE_PRODUCT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_PRODUCT,
  FILTER_PRODUCTS,
  CLEAR_PRODUCTS,
  CLEAR_FILTER,
  PRODUCT_ERROR,
} from '../types';

export default (state, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
        loading: false,
      };
    case LOAD_PRODUCTS:
      return {
        ...state,
        cartItems: action.payload,
        loading: false,
      };
    case ADD_PRODUCT:
      return {
        ...state,
        cartItems: [action.payload, ...state.cartItems],
        loading: false,
      };
    case DELETE_PRODUCT: 
    return {
      ...state,
      cartItems: state.cartItems.filter(item => item._id !== action.payload)
    }
    case PRODUCT_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
