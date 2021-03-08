module.exports = {
  mongoURI: process.env.MONGODB_URL,
  facebookAuth: {
    clientID: process.env.clientID,
    clientSecret: process.env.clientSecret,
    callbackURL: process.env.callbackURL,
  },
};
