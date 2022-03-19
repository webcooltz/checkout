const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require('mongoose');
// const debug = require('debug')('node-angular');

// import the routing file to handle the default (index) route
const index = require('./backend/routes/app');
const menuRoutes = require('./backend/routes/menu');
const adminRoutes = require('./backend/routes/admin');

// establish a connection to the mongo database
// mongoose.connect('mongodb://localhost:27017/checkout',
//    { useNewUrlParser: true }, (err, res) => {
//       if (err) {
//          console.log('Connection failed: ' + err);
//       }
//       else {
//          console.log('Connected to database!');
//       }
//    }
// );

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(cookieParser());

app.use(logger('dev'));

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PATCH, PUT, DELETE, OPTIONS'
  );
  next();
});

app.use(express.static(path.join(__dirname, 'dist/checkout')));

// map the default route ('/') to the index route
app.use('/', index);
app.use('./menu', menuRoutes);
app.use('./admin', adminRoutes);

// Tell express to map all other non-defined routes back to the index page
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/checkout/index.html'));
});

const port = process.env.PORT || '3000';
app.set('port', port);

const server = http.createServer(app);

server.listen(port, function() {
  console.log('API running on localhost: ' + port)
});
