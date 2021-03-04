import React, { Fragment } from 'react';

// React Bootstrap Components
import { Navbar } from 'react-bootstrap';
// Header Components
import Brand from './Brand';
import MiddleNav from './MiddleNav';
import RightNav from './RightNav';

const Header = () => {
  return (
    <Fragment>
      <Navbar bg='dark' expand='lg' variant='dark' className='header__nav'>
        <Brand></Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          {/* Here Navbar collapsible components */}
          <MiddleNav />
          <RightNav />
        </Navbar.Collapse>
      </Navbar>
    </Fragment>
  );
};

export default Header;
