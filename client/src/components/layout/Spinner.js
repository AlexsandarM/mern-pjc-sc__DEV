import React, { Fragment } from 'react';
import spinner from './spinner_modern.gif';

// eslint-disable-next-line
export default () => (
  <Fragment>
    <img
      src={spinner}
      style={{ width: '250px', margin: 'auto', display: 'block' }}
      alt='Loading...'
    />
  </Fragment>
);
