import React, { useContext, useRef, useEffect } from 'react';

import ProductContext from '../../../context/product/productContext';

const Search = () => {
  const productContext = useContext(ProductContext);
  const text = useRef('');

  const { filtered, clearFilter, filterProducts } = productContext;

  //Search Filter

  useEffect(() => {
    if (filtered === null) {
      text.current.value = '';
    }
  });

  const onChange = e => {
    if (text.current.value !== '') {
      // console.log(text.current.value);
      filterProducts(e.target.value);
    } else {
      clearFilter();
    }
  };

  return (
    <form>
      <input
        className='serach__input form-control bg-dark'
        ref={text}
        type='text'
        placeholder='Search products...'
        onChange={onChange}
      />
    </form>
  );
};

export default Search;
