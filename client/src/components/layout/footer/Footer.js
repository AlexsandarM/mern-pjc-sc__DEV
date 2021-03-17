import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Footer.css';
import { Col, Container, Form, Row } from 'react-bootstrap';
import AlertContext from '../../../context/alert/alertContext';

const Footer = () => {
  const alertContext = useContext(AlertContext);

  const { setAlert } = alertContext;

  const [text, setText] = useState({
    email: '',
  });

  const onEmailChange = e => setText({ email: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();

    axios({
      method: 'POST',
      url: '/mailchimp/subscribe',
      data: text,
    }).then(res => {
      if (res.data === 'success') {
        setAlert('Message Sent!', 'success');
        setText({
          email: '',
        });
      } else if (res.data === 'fail') {
        setAlert('Message failed to send!', 'danger');
      }
    });
  };

  return (
    <footer className='footer-wrap'>
      <Container className='first_class'>
        <Row>
          <Col md={6} sm={12} lg={4}>
            <h3 className='text-center m-1'>STAY UPDATED</h3>
            <p className='text-center m-1'>
              Subscribe to our newsletter to get our latest news.
            </p>
          </Col>
          <Col md={6} sm={12} lg={4}>
            <Form className='newsletter' method='POST' onSubmit={handleSubmit}>
              <input
                name='email'
                type='email'
                id='newsleter__email'
                placeholder='Email Address'
                onChange={onEmailChange}
                required
              />
              <button className='newsletter_submit_btn' type='submit'>
                <i className='fa fa-paper-plane'></i>
              </button>
            </Form>
          </Col>
          <Col sm={12} lg={4}>
            <Container>
              <Container className='social_icons'>
                <h3 className='text-center m-1'>Stay Connected</h3>
                <Col className='text-center'>
                  <Link
                    className='round-btn btn-facebook text-decoration-none'
                    to='#'
                  >
                    <i className='fab fa-facebook-f' aria-hidden='true' />
                  </Link>
                  <Link
                    className='round-btn btn-linkedin text-decoration-none'
                    to='#'
                  >
                    <i className='fab fa-linkedin-in' aria-hidden='true' />
                  </Link>
                  <Link
                    className='round-btn btn-twitter text-decoration-none'
                    to='#'
                  >
                    <i className='fab fa-twitter' aria-hidden='true' />
                  </Link>
                  <Link
                    className='round-btn btn-instagram text-decoration-none'
                    to='#'
                  >
                    <i className='fab fa-instagram' aria-hidden='true' />
                  </Link>
                  <Link
                    className='round-btn btn-envelop text-decoration-none'
                    to='#'
                  >
                    <i className='far fa-envelope' aria-hidden='true' />
                  </Link>
                </Col>
              </Container>
            </Container>
          </Col>
        </Row>
      </Container>
      <Row>
        <Container fluid>
          <div className='copyright'>
            {new Date().getFullYear()} | All Rights Reserved by Aleksandar
            Mitrevski
          </div>
        </Container>
      </Row>
    </footer>
  );
};

export default Footer;
