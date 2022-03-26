var express = require('express');
var router = express.Router();
const Menu = require('../models/menu');


router.get('/', (req, res, next) => {
  Menu.find()
    .then(menu => {
      res.status(200).json({
          message: 'menu fetched successfully!',
          menu: menu
        });
    })
    .catch(error => {
      res.status(500).json({
        message: 'An error occurred',
        error: error
      });
    });
});

module.exports = router;
