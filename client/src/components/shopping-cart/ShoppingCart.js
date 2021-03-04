import React, { Fragment, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import CurrencyFormat from 'react-currency-format';
import { Jumbotron, Container, Row, Col, Button } from 'react-bootstrap';
import './card.css';
import Spinner from '../layout/Spinner';
import { getCartTotal } from '../../context/product/ProductState';

import ProductContext from '../../context/product/productContext';
import AuthContext from '../../context/auth/authContext';

const ShoppingCart = () => {
  const productContext = useContext(ProductContext);
  const authContext = useContext(AuthContext);

  const { isAuthenticated } = authContext;
  const { cartItems, loading, loadProducts, removeFromCart } = productContext;

  useEffect(() => {
    loadProducts();
    // eslint-disable-next-line
  }, []);

  if (!isAuthenticated) {
    return (
      <Fragment>
        <h4 className='text-center p-3'>Please Login</h4>
      </Fragment>
    );
  }

  const removeItem = id => {
    removeFromCart(id);
  };

  return (
    <Fragment>
      <Container className='sp-cart'>
        <Jumbotron className='sc-jumbotron'>
          {!loading ? (
            cartItems.length > 0 && cartItems !== null ? (
              <Fragment>
                <h5 className='text-center pb-3'>
                  Your Shopping Cart{' '}
                  <i className='fas fa-shopping-cart text-danger' />
                </h5>
                <Container fluid className='text-center'>
                  <Row className='d-flex justify-content-between align-items-start'>
                    <div className='d-none d-lg-block col-lg-2'>
                      <strong>Product</strong>
                    </div>
                    <div className='d-none d-lg-block col-lg-2'>
                      <strong>Product Name:</strong>
                    </div>
                    <div className='d-none d-lg-block col-lg-2'>
                      <strong>Price:</strong>
                    </div>
                    <div className='d-none d-lg-block col-lg-2'>
                      <strong>Remove from stock:</strong>
                    </div>
                  </Row>
                  <hr />
                </Container>

                {cartItems.map(item => {
                  return (
                    <Container fluid className='text-center' key={item._id}>
                      <Row className='cart__items d-flex justify-content-between align-items-center'>
                        <div className='m-1'>
                          <img
                            style={{ width: '6rem', height: '4rem' }}
                            src={item.imgPath}
                            className='img-fluid'
                            alt={item.title}
                          />
                        </div>
                        <div className=''>
                          <div className='text-primary'>{item.title}</div>
                        </div>
                        <div className=''>
                          <div className='text-primary'>${item.price}</div>
                        </div>

                        <div className=''>
                          <Button
                            className='trash_btn'
                            variant='outline-light'
                            size='sm'
                            onClick={() => removeItem(item._id)}
                          >
                            <i className='fas fa-trash' />
                          </Button>
                        </div>
                      </Row>
                    </Container>
                  );
                })}
                <hr />
                <Container>
                  <Row>
                    <Col className='total'>
                      <CurrencyFormat
                        renderText={value => (
                          <Fragment>
                            <p>
                              Total ({cartItems.length} items):{' '}
                              <strong className='text-primary'>{`${value}`}</strong>
                            </p>
                            <small>
                              <input type='checkbox' /> This order contains a
                              gift
                            </small>
                          </Fragment>
                        )}
                        decimalScale={2}
                        fixedDecimalScale={true}
                        value={getCartTotal(cartItems)}
                        displayType={'text'}
                        thousandSeparator={true}
                        prefix={'$'}
                      />
                    </Col>
                  </Row>
                </Container>
              </Fragment>
            ) : (
              <Container className='text-center p-2 m-2'>
                <h5 className='text-center p-2 m-2'>Your Cart is Empty</h5>
                <Link to='/desktop' className='text-primary'>
                  Continue Shopping
                </Link>
              </Container>
            )
          ) : (
            <Spinner />
          )}

          <Row>
            {cartItems.length > 0 && (
              <Col className='mt-5'>
                <Button variant='outline-primary' className='btn-block mx-auto'>
                  Proceed to payment
                </Button>
              </Col>
            )}
          </Row>
        </Jumbotron>
        <div>
          <Link to='/cart' className='btn btn-outline-dark'>
            Load More
          </Link>
        </div>
      </Container>
    </Fragment>
  );
};

export default ShoppingCart;
