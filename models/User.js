const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  googleId: String,
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  data: {
    type: Date,
    default: Date.now,
  },
});

module.exports = UserSchema;
module.exports = mongoose.model('user', UserSchema);
