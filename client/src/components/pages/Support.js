import React from 'react';
import { Container } from 'react-bootstrap';
import './support.css';

const Support = () => {
  return (
    <Container fluid className='support'>
      <div className='support__content p-3'>
        <div>
          <h2 className='text-center text-white'> Welcome to Online Support </h2>
        </div>
        <div className='support__contact'>
          <div className='row'>
            <div className='col-lg-6 mx-auto'>
              <div className='contact-form'>
                <div className='form-group contact_email text-center'>
                  <label className='control-label' htmlFor='email'>
                    Already a customer? Contact support services
                  </label>
                  <div className=''>
                    <input
                      type='email'
                      className='form-control'
                      id='email'
                      placeholder='Enter email'
                      name='email'
                    />
                  </div>
                </div>
                <div className='form-group contact__textarea'>
                  <p className='control-label text-center' htmlFor='comment'>
                    <span className=''>Leave us a Comment:</span>
                  </p>
                  <div className='mx-auto'>
                    <textarea
                      className='form-control'
                      rows={5}
                      id='comment'
                      defaultValue={''}
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Support;
