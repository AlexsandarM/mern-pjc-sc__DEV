import React, { useContext, useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import './user.css';
import { Form, Row, Col, Button, Container } from 'react-bootstrap';
import FacebookLogin from 'react-facebook-login';

import AlertContext from '../../context/alert/alertContext';
import AuthContext from '../../context/auth/authContext';
// Custom Components
import Alerts from '../layout/Alerts';

const Register = props => {
  let history = useHistory();
  const alertContext = useContext(AlertContext);
  const authContext = useContext(AuthContext);

  const { setAlert } = alertContext;
  const { register, error, clearErrors, isAuthenticated } = authContext;

  useEffect(() => {
    if (isAuthenticated) {
      // redirecting in React
      history.push('/account');
    }

    if (error === 'The User already exists') {
      setAlert(error, 'danger');
      clearErrors();
    }
    // eslint-disable-next-line
  }, [error, isAuthenticated, props.history]);

  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
  });

  const { name, email, password, password2 } = user;

  const onChange = e => setUser({ ...user, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    if (name === '' || email === '' || password === '') {
      setAlert('Please enter all fields', 'danger');
    } else if (password !== password2) {
      setAlert('Passwords do not match', 'danger');
    } else {
      register({
        name,
        email,
        password,
      });
    }
  };

  // Register with Social Networks
  // Facebook
  const componentClicked = data => {
    // console.log('data', data);
  };

  const responseFacebook = response => {
    // console.log(response.accessToken)
    console.log(response);
    // loginFB({ token: response.accessToken });
    register({ name: response.name, email: response.email, password: '' });
  };

  return (
    <Container fluid className='user-page'>
      <h3 className='text-primary text-center p-2'>Register as New User</h3>
      <Row className='user-form p-2'>
        <Col>
          <h6>Register via</h6>
          <Container fluid className='social-buttons'>
            <FacebookLogin
              appId='368837167423490'
              autoLoad={false}
              fields='name,email,picture'
              onClick={componentClicked}
              callback={responseFacebook}
              textButton=' Facebook'
              cssClass='btn btn-fb'
              icon='fa-facebook'
            />
            <Link to='#' className='btn btn-tw'>
              <i className='fa fa-twitter'></i> Twitter
            </Link>
          </Container>
          <h6>or</h6>
          <Form className='form' id='register-form' onSubmit={onSubmit}>
            <Form.Group className='form-group'>
              <Form.Control
                className='form-control'
                id='inputName'
                type='text'
                name='name'
                placeholder='Enter Your Name'
                required
                value={name}
                onChange={onChange}
              />
            </Form.Group>
            <Form.Group className='form-group'>
              <Form.Control
                className='form-control'
                id='inputEmail1'
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
                id='password'
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
              <Form.Control
                className='form-control'
                id='password2'
                type='password'
                name='password2'
                placeholder='Confirm the Password'
                required
                minLength='6'
                value={password2}
                onChange={onChange}
              />
            </Form.Group>
            <Form.Group className='form-group'>
              <Button className='btn btn-primary btn-block' type='submit'>
                Register
              </Button>
            </Form.Group>
            <Alerts />
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Register;
