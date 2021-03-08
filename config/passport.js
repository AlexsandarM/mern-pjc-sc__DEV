const FacebookStrategy = require('passport-facebook').Strategy;
const User = require('../models/User');
const config = require('./key');

const clientID = config.facebookAuth.clientID;
const clientSecret = config.facebookAuth.clientSecret;
const callbackURL = config.facebookAuth.callbackURL;

module.exports = function (passport) {
  // facebook reg/login
  passport.use(
    new FacebookStrategy(
      {
        clientID,
        clientSecret,
        callbackURL,
      },
      function (accessToken, refreshToken, profile, done) {
        process.nextTick(function () {
          User.findOne({ 'facebook.id': profile.id }, function (err, user) {
            if (err) return done(err);
            if (user) return done(null, user);
            else {
              var newUser = new User();
              newUser.facebook.id = profile.id;
              newUser.facebook.token = accessToken;
              newUser.facebook.name =
                profile.name.givenName + ' ' + profile.name.familyName;
              newUser.facebook.email = profile.emails[0].value;

              newUser.save(function (err) {
                if (err) throw err;
                return done(null, newUser);
              });
              console.log(profile);
            }
          });
        });
      }
    )
  );
};
