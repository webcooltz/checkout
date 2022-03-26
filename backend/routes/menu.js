var express = require('express');
var router = express.Router();
const Menu = require('../models/menu');


router.get('/landing', (req, res, next) => {
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

// router.get('/menu-admin', (req, res, next) => {
//   Menu.find()
//     .then(menu => {
//       res.status(200).json({
//           message: 'menu fetched successfully!',
//           menu: menu
//         });
//     })
//     .catch(error => {
//       res.status(500).json({
//         message: 'An error occurred',
//         error: error
//       });
//     });
// });

// router.post('/menu-admin', (req, res, next) => {
//   Menu.findById(id)
//     .then
// })

module.exports = router;
