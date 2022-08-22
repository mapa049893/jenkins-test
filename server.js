'use strict';
const path = require('path');
const express = require('express');
const app = express();

app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

const api = require('./app/routes/note.routes.js');
app.use('/api', api);

app.use('/insurance', function (req, res) {

  return res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.use('/login', function (req, res) {

  return res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.use('/authlogin', function (req, res) {

  return res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.use('/callingdesk', function (req, res) {

  return res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.use('/verifyqr', function (req, res) {

  return res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.use('/nsdlpan', function (req, res) {

  return res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.use('/nsdlview', function (req, res) {

  return res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.use(express.static(path.join(__dirname, 'public')));

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
  console.log('Press Ctrl+C to quit.');

});

