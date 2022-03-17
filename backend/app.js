const express = require('express');

const app = express();

app.use('/api/posts', (req, res, next) => {
  const posts = [

  ];
  res.json("hello from express!");
});

module.exports = app;
