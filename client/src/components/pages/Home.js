import React, { Fragment } from 'react';
import { Carousel } from 'react-bootstrap';

const imgPlaceHolder =
  'https://via.placeholder.com/1600x575.png?text=Product+Image';

const Home = () => {
  return (
    <Fragment>
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
