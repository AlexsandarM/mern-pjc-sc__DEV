import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';
// React Bootstrap Components
// eslint-disable-next-line
import {
  Nav,
  NavDropdown,
  Dropdown,
  Row,
  Col,
  Container,
} from 'react-bootstrap';

const NavPages = () => {
  return (
    <Nav className='ml-auto'>
      <Nav.Link as={Link} to='/'>
        Home
      </Nav.Link>

      <NavDropdown title='Products' id='megamenu'>
        <Container className='megamenu__dropdown'>
          <Row>
            <Col md={4} className='megamenu_col'>
              <Dropdown.Header>
                <Link to='/desktop'>
                  Desktop computers <small>(View all)</small>
                </Link>
              </Dropdown.Header>
              <Dropdown.Divider />
              <Dropdown.Item to='/desktop'>
                <strong>
                  <Link to='/desktop'>Gaming desktops</Link>
                </strong>
              </Dropdown.Item>
              <Dropdown.Item>
                <strong>
                  <Link to='/desktop'>Speciality Desktops</Link>
                </strong>
              </Dropdown.Item>
            </Col>
            <Col md={4} className='megamenu_col'>
              <Dropdown.Header>
                <Link to='/laptop'>
                  Laptop computers <small>(View all)</small>
                </Link>
              </Dropdown.Header>
              <Dropdown.Divider />
              <Dropdown.Item>
                <strong>
                  <Link to='/laptop'>Gaming laptops</Link>
                </strong>
              </Dropdown.Item>
              <Dropdown.Item>
                <strong>
                  <Link to='/laptop'>Speciality laptops</Link>
                </strong>
              </Dropdown.Item>
            </Col>
            <Col md={4} className='megamenu_col'>
              <Dropdown.Header>
                <strong>
                  <Link to='#'>Popular Brands</Link>
                </strong>
              </Dropdown.Header>
              <Dropdown.Divider />
              <Dropdown.Item>
                <strong>
                  <Link to='#'>The Brand</Link>
                </strong>
              </Dropdown.Item>
            </Col>
          </Row>
        </Container>
      </NavDropdown>

      <Nav.Link as={Link} to='/support'>
        Support
      </Nav.Link>
    </Nav>
  );
};

export default NavPages;
