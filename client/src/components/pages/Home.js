import React, { Fragment, useContext } from 'react';
import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import ProductContext from '../../context/product/productContext';

const imgPlaceHolder =
  'https://via.placeholder.com/1600x575.png?text=Product+Image';
  

const Home = () => {
  const productContext = useContext(ProductContext);

  const { filtered } = productContext;

  return (
    <Fragment>
      {filtered?.length === 0 && (
        <div
          class='text-center alert alert-warning alert-dismissible fade show'
          role='alert'
        >
          <strong>Holy guacamole!</strong> No product with that information!
          <p>Search for products on <Link to='/desktop'>Products Page</Link></p>
        </div>
      )}
      <section>
        <Carousel>
          <Carousel.Item interval={1000}>
            <img
              className='d-block w-100'
              src={imgPlaceHolder}
              alt='First slide'
            />
            <Carousel.Caption>
              <h6>First slide label</h6>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={500}>
            <img
              className='d-block w-100'
              src={imgPlaceHolder}
              alt='Third slide'
            />
            <Carousel.Caption>
              <h6>Second slide label</h6>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className='d-block w-100'
              src={imgPlaceHolder}
              alt='Third slide'
            />
            <Carousel.Caption>
              <h6>Third slide label</h6>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </section>
      <hr className='feature_divider' />
    </Fragment>
  );
};

export default Home;
