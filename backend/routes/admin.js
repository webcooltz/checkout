var express = require('express');
var router = express.Router();
const Admin = require('../models/Admin');


router.get('/preferences', (req, res, next) => {
  Admin.findOne({ id: '0' })
    .then(admin => {
      console.log(admin);
      res.status(200).json({
          message: 'admin preferences fetched successfully!',
          admin: admin
        });
    })
    .catch(error => {
      res.status(500).json({
        message: 'An error occurred',
        error: error
      });
    });
});

// router.put('/preferences', (req, res, next) => {
//   Admin.find()
//     .then(admin => {
//       admin.title = req.body.title;
//       admin.logoImgUrl = req.body.logoImgUrl;
//       admin.primaryColor = req.body.primaryColor;
//       admin.secondaryColor = req.body.secondaryColor;
//       admin.tertiaryColor = req.body.tertiaryColor;

//   Admin.updateOne(admin)
//     .then(res => {
//       res.status(204).json({
//         message: 'admin updated successfully'
//       })
//     })
//     .catch(err => {
//         res.status(500).json({
//         message: 'An error occurred',
//         error: err
//       });
//     });
//     })
//     .catch(err => {
//       res.status(500).json({
//         message: 'admin not found.',
//         error: { admin: 'admin not found'}
//       });
//     });
// });

module.exports = router;
