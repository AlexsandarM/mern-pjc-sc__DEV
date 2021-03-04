import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';
// React Bootstrap Components
// eslint-disable-next-line
import { Nav, NavDropdown, Dropdown, Row, Col } from 'react-bootstrap';

const NavPages = () => {
  return (
    <Nav className='ml-auto'>
      <Nav.Link as={Link} to='/'>
        Home
      </Nav.Link>

      <NavDropdown title='Products' id='basic-nav-dropdown'>
        <Row>
          <Col md={4}>
            <Dropdown.Item as='ul' className='dropdown-item-megamenu'>
              <Dropdown.Item as='li'>
                Desktop <Link to='/desktop'>(View all)</Link>
              </Dropdown.Item>
              <Dropdown.Item as='li'>
                <strong>
                  <Link to='/desktop'>Gaming desktops</Link>
                </strong>
              </Dropdown.Item>
              <Dropdown.Item as='li'>
                <strong>
                  <Link to='/desktop'>Speciality Desktops</Link>
                </strong>
              </Dropdown.Item>
            </Dropdown.Item>
          </Col>
          <Col md={4}>
            <Dropdown.Item as='ul' className='dropdown-item-megamenu'>
              <Dropdown.Item as='li'>
                Laptop computers <Link to='/laptop'>(View all)</Link>
              </Dropdown.Item>
              <Dropdown.Item as='li'>
                <strong>
                  <Link to='/laptop'>Gaming laptops</Link>
                </strong>
              </Dropdown.Item>
              <Dropdown.Item as='li'>
                <strong>
                  <Link to='/laptop'>Speciality laptops</Link>
                </strong>
              </Dropdown.Item>
            </Dropdown.Item>
          </Col>
          <Col md={4}>
            <Dropdown.Item as='ul' className='dropdown-item-megamenu'>
              <Dropdown.Item as='li'>Popular Brands</Dropdown.Item>
            </Dropdown.Item>
          </Col>
        </Row>
      </NavDropdown>

      <Nav.Link as={Link} to='/account'>
        Account
      </Nav.Link>
    </Nav>
  );
};

export default NavPages;
