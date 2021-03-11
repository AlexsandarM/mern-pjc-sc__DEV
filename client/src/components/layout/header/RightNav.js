import React, { Fragment, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './header.css';
// React Bootstrap Components
// eslint-disable-next-line
import {
  Nav,
  Form,
  FormControl,
  NavDropdown,
  Dropdown,
  Button,
} from 'react-bootstrap';
// Custom components
import ShoppingCart from '../../shopping-cart/ShoppingCart';

import AuthContext from '../../../context/auth/authContext';

const RightNav = () => {
  const authContext = useContext(AuthContext);

  const { isAuthenticated, logout, user, loadUser } = authContext;

  useEffect(() => {
    loadUser();
    // eslint-disable-next-line
  }, []);

  const onLogout = () => {
    logout();
  };

  const authLinks = (
    <Fragment>
      <Dropdown.Item as='li'>
        Hello <span className='text-primary'> {user && user.name} </span>
      </Dropdown.Item>
      <Dropdown.Item as='li'>
        <Link onClick={onLogout} to='#!'>
          <i className='fas fa-sign-out-alt' />{' '}
          <span className='hide-sm'>Logout</span>
        </Link>
      </Dropdown.Item>
    </Fragment>
  );

  const guestLinks = (
    <Fragment>
      <Dropdown.Item as='li'>
        <Link to='/register'>
          <i className='fas fa-user-plus' />{' '}
          <span className='hide-sm'>Register</span>
        </Link>
      </Dropdown.Item>
      <Dropdown.Item as='li'>
        <Link to='/login'>
          <i className='fas fa-sign-in-alt' />{' '}
          <span className='hide-sm'>Login</span>
        </Link>
      </Dropdown.Item>
    </Fragment>
  );

  return (
    <Nav className='nav__right ml-auto text-color'>
      <NavDropdown
        className='nav__search'
        alignRight
        title={
          <span>
            <i className='fas fa-search' />
          </span>
        }
      >
        <Form inline>
          <FormControl type='text' placeholder='Search' className='bg-dark' />
          {/* <Button variant='outline-dark'>
            <i className='fas fa-search' />
          </Button> */}
        </Form>
      </NavDropdown>
      <NavDropdown
        id='dropdown-button-shopping'
        title={
          <span>
            <i className='fas fa-shopping-cart' />
          </span>
        }
        alignRight
      >
        <Nav.Item as='div'>
          <ShoppingCart />
        </Nav.Item>
      </NavDropdown>
      <NavDropdown
        id='dropdown-button-user'
        title={
          <span>
            <i className='fa fa-user fa-fw' />
          </span>
        }
        alignRight
      >
        <Nav.Item as='div'>{isAuthenticated ? authLinks : guestLinks}</Nav.Item>
      </NavDropdown>
    </Nav>
  );
};

export default RightNav;
