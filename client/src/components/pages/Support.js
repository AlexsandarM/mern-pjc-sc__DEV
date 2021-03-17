import React, { useState, useContext } from 'react';
import { Container, Form } from 'react-bootstrap';
import Alert from '../layout/Alerts';
import './support.css';
import axios from 'axios';
import AlertContext from '../../context/alert/alertContext';

const Support = () => {
  const alertContext = useContext(AlertContext);

  const { setAlert } = alertContext;

  const [text, setText] = useState({
    email: '',
    textarea: '',
  });

  const onEmailChange = e => setText({ ...text, email: e.target.value });
  const onTextareaChange = e => setText({ ...text, textarea: e.target.value });

  const handleForm = e => {
    e.preventDefault();

    axios({
      method: 'POST',
      url: '/mailchimp/support',
      data: text,
    }).then(res => {
      if (res.data === 'success') {
        console.log('Succesfuly sand msg');

        setAlert('Message Sent!', 'success');
        setText({
          email: '',
          textarea: '',
        });
      } else if (res.data === 'fail') {
        setAlert('Message failed to send!', 'danger');
      }
    });
  };

  return (
    <Container fluid className='support'>
      <div className='support__content p-3'>
        <div>
          <h2 className='text-center text-white'>Welcome to Online Support</h2>
        </div>
        <div className='support__contact'>
          <div className='row'>
            <div className='col-lg-6 mx-auto'>
              <Form className='contact-form' onSubmit={handleForm}>
                <div className='form-group contact_email text-center'>
                  <label className='control-label' htmlFor='email'>
                    Already a customer? Contact support services
                  </label>
                  <div className=''>
                    <input
                      id='contact__email'
                      type='email'
                      name='email'
                      className='form-control'
                      placeholder='Enter email'
                      required
                      onChange={onEmailChange}
                    />
                  </div>
                </div>
                <div className='form-group contact__textarea'>
                  <p className='control-label text-center' htmlFor='comment'>
                    <span className=''>Leave us a Comment:</span>
                  </p>
                  <div className='mx-auto'>
                    <textarea
                      id='contact__textarea'
                      className='form-control'
                      name='textarea'
                      rows={5}
                      required
                      onChange={onTextareaChange}
                    />
                  </div>
                </div>
                <div className='form-group'>
                  <div className=''>
                    <button type='submit' className='btn btn-outline-dark'>
                      Submit
                    </button>
                  </div>
                </div>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Support;
