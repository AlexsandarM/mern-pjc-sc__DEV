const express = require('express');
const User = require('../models/User');
const UserSchema = require('../models/User');
const config = require('./key');

const session = require('express-session');
const passport = require('passport');
const passportLocalMongoose = require('passport-local-mongoose');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const findOrCreate = require('mongoose-findorcreate');

const app = express();

app.use(
  session({
    secret: 'topSecret',
    resave: false,
    saveUninitialized: false,
  })
);

app.use(passport.initialize());
app.use(passport.session());

UserSchema.plugin(passportLocalMongoose);
UserSchema.plugin(findOrCreate);

passport.use(User.createStrategy());

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  User.findById(id, function(err, user) {
    done(err, user);
  });
});

// Auth with gooogle
passport.use(
  new GoogleStrategy(
    {
      clientID: config.googleAuth.CLIENT_ID,
      clientSecret: config.googleAuth.CLIENT_SECRET,
      callbackURL: 'http://localhost:3000/auth/google/cart',
      userProfileURL: 'https://www.googleapis.com/oauth2/v3/userinfo',
    },
    function (accessToken, refreshToken, profile, cb) {
      User.findOrCreate({ googleId: profile.id }, function (err, user) {
        return cb(err, user);
      });
    }
  )
);

// google route
app.get(
  '/auth/google',
  passport.authenticate('google', { scope: ['profile'] })
);

// cart route
app.get('/cart', (req, res) => {
  if (req.isAuthenticated) {
    res.redirect('cart');
  } else {
    res.redirect('/login');
  }
});

app.get(
  '/auth/google/cart',
  passport.authenticate('google', { failureRedirect: '/login' }),
  function (req, res) {
    // Successful authentication, redirect home.
    res.redirect('/cart');
  }
);

// Local register User
app.post('/register', (req, res) => {
  User.register({ name: req.body.username }, req.body.password, (err, user) => {
    if (err) {
      console.log(err);
      res.redirect('/register');
    } else {
      passport.authenticate('local')(req, res, () => {
        res.redirect('/cart');
      });
    }
  });
});

// Local login User
app.post('/login', (req, res) => {
  const user = new User({
    name: req.body.name,
    password: req.body.password,
  });

  req.login(user, err => {
    if (err) {
      console.log(err);
    } else {
      passport.authenticate('local')(req, res, () => {
        res.redirect('/cart');
      });
    }
  });
});

module.exports;
