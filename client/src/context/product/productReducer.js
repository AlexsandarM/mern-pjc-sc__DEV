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

// eslint-disable-next-line
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
        cartItems: state.cartItems.filter(item => item._id !== action.payload),
      };
    case PRODUCT_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case FILTER_PRODUCTS:
      return {
        ...state,
        filtered: state.products.filter(product => {
          const regex = new RegExp(`${action.payload}`, 'gi');
          return (
            product.title.match(regex) ||
            product.desc.match(regex) ||
            product.price.toString().match(regex)
          );
        }),
      };
    case CLEAR_FILTER:
      return {
        ...state,
        filtered: null,
      };
    default:
      return state;
  }
};
