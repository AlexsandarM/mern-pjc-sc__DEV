const express = require('express');
const router = express.Router();
const request = require('request');

// @route  POST mailchimp/subscribe
// @disc   Subscribe to list
// @access Public
router.post('/subscribe', (req, res) => {
  const { email } = req.body;
  console.log(email);

  try {
    // Construct req data
    const data = {
      members: [
        {
          email_address: email,
          status: 'subscribed',
        },
      ],
    };

    const postData = JSON.stringify(data);

    const options = {
      url: 'https://us7.api.mailchimp.com/3.0/lists/dab2cd2231',
      method: 'POST',
      headers: {
        Authorization: 'auth auth MAILCHIMP_API',
      },
      body: postData,
    };

    request(options, (err, response, body) => {
      if (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
      } else {
        if (response.statusCode === 200) {
          res.send('success');
        } else {
          res.send('fail');
        }
      }
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route  POST mailchimp/support
// @disc   Support services
// @access Public
router.post('/support', (req, res) => {
  const { email, textarea } = req.body;
  console.log(email, textarea);

  try {
    // Construct req data
    const data = {
      members: [
        {
          email_address: email,
          status: 'subscribed',
          merge_fields: {
            COMMENT: textarea,
          },
        },
      ],
    };

    const postData = JSON.stringify(data);

    const options = {
      url: 'https://us7.api.mailchimp.com/3.0/lists/dab2cd2231',
      method: 'POST',
      headers: {
        Authorization: 'auth MAILCHIMP_API',
      },
      body: postData,
    };

    request(options, (err, response, body) => {
      if (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
      } else {
        if (response.statusCode === 200) {
          res.send('success');
        } else {
          res.send('fail');
        }
      }
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
