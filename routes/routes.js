const User = require('../models/User');

module.exports = function (app, passport) {
  // @route  GET api/auth/facebook
  // @disc   Get logged/register user with facebook
  // @access Private
  app.get(
    '/auth/facebook',
    passport.authenticate('facebook', { scope: ['email'] })
  );

  app.get(
    '/auth/facebook/callback',
    passport.authenticate('facebook', {
      successRedirect: '/cart',
      failureRedirect: '/',
    })
  );
};
