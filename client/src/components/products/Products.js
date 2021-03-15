import React, { Fragment, useContext, useEffect } from 'react';
import './products.css';
import { Container, Row, Col } from 'react-bootstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { Link } from 'react-router-dom';

import ProductContext from '../../context/product/productContext';

import Spinner from '../layout/Spinner';
import ProductItem from './ProductItem';

const Products = () => {
  const productContext = useContext(ProductContext);

  const { products, filtered, getAllProducts, loading } = productContext;

  useEffect(() => {
    getAllProducts();
    // eslint-disable-next-line
  }, []);

  return (
    <Fragment>
      {filtered?.length === 0 && (
        <div
          class='text-center alert alert-warning alert-dismissible fade show'
          role='alert'
        >
          <strong>Holy guacamole!</strong> No product with that information!
          <p>To Search for the products type other informations</p>
        </div>
      )}
      {filtered !== null ? (
        <Container className='filtered'>
          <TransitionGroup>
            <Row>
              {filtered.map(product => (
                <CSSTransition
                  key={product._id}
                  timeout={500}
                  classNames='transition'
                >
                  <Col className='mx-auto' md={6} lg={4}>
                    <ProductItem product={product} />
                  </Col>
                </CSSTransition>
              ))}
            </Row>
          </TransitionGroup>
        </Container>
      ) : products !== null && products.length === 0 ? (
        <Container>
          <h4 className='text-center p-3'>Products are coming soon..</h4>
          <Spinner />
        </Container>
      ) : products.length !== 0 && !loading ? (
        <Container>
          <Row>
            {products.map(product => (
              <Col md={6} lg={4} key={product._id}>
                <ProductItem product={product} />
              </Col>
            ))}
          </Row>
        </Container>
      ) : (
        <Spinner />
      )}
    </Fragment>
  );
};

export default Products;
