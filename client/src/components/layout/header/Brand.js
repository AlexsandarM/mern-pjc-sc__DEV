import React from 'react';
import { Link } from 'react-router-dom';
// React Bootstrap Components
import { Navbar } from 'react-bootstrap';

const Brand = () => {
  return (
    <Navbar.Brand as={Link} to='/'>
      <img
        alt=''
        src='img\favicon-32x32.png'
        width='30'
        height='30'
        className='d-inline-block align-top'
      />{' '}
      Web Shop
    </Navbar.Brand>
  );
};

export default Brand;
