const express = require('express');
const connectDB = require('./config/db');
const path = require('path');
const passport = require('passport');

const app = express();

// Connect Database
connectDB();

require('./config/passport')(passport);

// Init Middleware former body-parser
app.use(express.json({ extended: false }));

// Define Routes
app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/products', require('./routes/products'));
app.use('/api/items', require('./routes/items'));
// Additional Routes
app.use(passport.initialize());
require('./routes/routes.js')(app, passport);

// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder , folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  );
}

let PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port: ${PORT}`));
