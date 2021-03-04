import React, { Fragment, useContext, useEffect } from 'react';
import ProductContext from '../../context/product/productContext';
import { Container, Row, Col } from 'react-bootstrap';

import Spinner from '../layout/Spinner';
import ProductItem from './ProductItem';

const Products = () => {
  const productContext = useContext(ProductContext);

  const { products, getAllProducts, loading } = productContext;

  

  useEffect(() => {
    getAllProducts();
    // eslint-disable-next-line
  }, []);

  return (
    <Fragment>
      {products !== null && products.length === 0 ? (
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
