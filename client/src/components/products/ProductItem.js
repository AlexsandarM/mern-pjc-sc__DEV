import React, { useContext } from 'react';
import ProductContext from '../../context/product/productContext';
import AuthContext from '../../context/auth/authContext';

import { Card, Button, Row, Col } from 'react-bootstrap';

const ProductItem = ({ product }) => {
  const productContext = useContext(ProductContext);
  const { isAuthenticated } = useContext(AuthContext);

  const { addToCard } = productContext;
  // eslint-disable-next-line
  const { imgPath, title, desc, category, price, _id, qty } = product;

  const onClick = () => {
    addToCard(product);
  };

  return (
    <Card
      border='dark'
      style={{ maxWidth: '18rem', margin: '10px' }}
      className='mx-auto'
    >
      <Card.Img variant='top' src={imgPath} alt={title} />
      <Card.Body>
        <Card.Title className='text-center'> {title} </Card.Title>
        <Card.Text>{desc}</Card.Text>
      </Card.Body>
      <Card.Footer>
        <Row>
          <Col className='text-center'>
            {isAuthenticated && (
              <Button size='sm' onClick={onClick} variant='outline-dark'>
                <span>Add to Cart</span>
              </Button>
            )}
          </Col>
          <Col className='text-center'>
            <small>price: </small>
            <strong className='text-muted text-right'>${price}</strong>
          </Col>
        </Row>
      </Card.Footer>
    </Card>
  );
};

export default ProductItem;
