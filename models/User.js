const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
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
  facebook: {
		id: String,
		token: String,
		email: String,
		name: String
	}
});

module.exports = mongoose.model('user', UserSchema);
