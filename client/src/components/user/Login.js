import React, { Fragment, useContext, useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import './user.css';
import { Form, Row, Col, Button, Container } from 'react-bootstrap';

import AuthContext from '../../context/auth/authContext';
import AlertContext from '../../context/alert/alertContext';
import Alerts from '../layout/Alerts';

const Login = props => {
  let history = useHistory();
  const authContext = useContext(AuthContext);
  const alertContext = useContext(AlertContext);

  const { login, error, isAuthenticated, clearErrors } = authContext;
  const { setAlert } = alertContext;

  useEffect(() => {
    if (isAuthenticated) {
      history.push('/cart');
    }

    if (error === 'Invalid Credentials') {
      setAlert(error, 'danger');
      clearErrors();
    }
    // eslint-disable-next-line
  }, [error, isAuthenticated, props.history]);

  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  const { email, password } = user;

  const onChange = e => setUser({ ...user, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    if (email === '' || password === '') {
      setAlert('Please fill in all fields', 'danger');
    } else {
      login({
        email,
        password,
      });
    }
  };

  return (
    <Fragment>
      <Container fluid className='user-page'>
        <h3 className='text-primary text-center p-2'>
          <i className='fas fa-user-tie' /> Login User
        </h3>

        <Row className='user-form p-2'>
          <Col md={12}>
            <h6>Login via</h6>
            <div className='social-buttons'>
              <Link to='/auth/facebook' className='btn btn-fb'>
                <i className='fa fa-facebook'></i> Facebook
              </Link>
              <Link to='#' className='btn btn-tw'>
                <i className='fa fa-twitter'></i> Twitter
              </Link>
            </div>
            <h6>or</h6>
            <Form className='form' id='login-form' onSubmit={onSubmit}>
              <Form.Group className='form-group'>
                <Form.Control
                  className='form-control'
                  id='inputEmail'
                  type='email'
                  name='email'
                  placeholder='Email address'
                  required
                  value={email}
                  onChange={onChange}
                />
              </Form.Group>
              <Form.Group className='form-group'>
                <Form.Control
                  className='form-control'
                  id='password-login'
                  type='password'
                  name='password'
                  placeholder='Password'
                  required
                  minLength='6'
                  value={password}
                  onChange={onChange}
                />
              </Form.Group>
              <Form.Group className='form-group'>
                <Button className='btn btn-primary btn-block' type='submit'>
                  Sign in
                </Button>
                <hr />
                <Alerts />
              </Form.Group>
            </Form>
          </Col>
          <div className='bottom text-center'>
            New here ?{' '}
            <Link to='/register'>
              <b>Join Us</b>
            </Link>
          </div>
        </Row>
      </Container>
    </Fragment>
  );
};

export default Login;
