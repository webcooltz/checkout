var express = require('express');
var router = express.Router();
const Admin = require('../models/Admin');


router.get('/', (req, res, next) => {
  Admin.find()
    .exec((err, admin) => {
      if (err) {
        return res.status(500).json({
          title: 'an error occurred getting the admin preferences',
          error: err
        });
      }
      return res.status(200).json(admin);
    })
});

router.put('/', (req, res, next) => {
  Admin.find()
    .then(admin => {
      admin.title = req.body.title;
      admin.logoImgUrl = req.body.logoImgUrl;
      admin.primaryColor = req.body.primaryColor;
      admin.secondaryColor = req.body.secondaryColor;
      admin.tertiaryColor = req.body.tertiaryColor;

  Admin.updateOne(admin)
    .then(res => {
      res.status(204).json({
        message: 'admin updated successfully'
      })
    })
    .catch(err => {
        res.status(500).json({
        message: 'An error occurred',
        error: err
      });
    });
    })
    .catch(err => {
      res.status(500).json({
        message: 'admin not found.',
        error: { admin: 'admin not found'}
      });
    });
});

module.exports = router;
