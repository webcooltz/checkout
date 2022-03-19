var express = require('express');
var router = express.Router();
// const Contact = require('../model/contact');


router.get('/', (req, res, next) => {
  Contact.find()
    .then(admin => {
      res.status(200).json({
          message: 'Admin fetched successfully!',
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
    //   Contact.findOne({ id: req.params.id })
    //     .then(contact => {
    //       contact.name = req.body.name;
    //       contact.email = req.body.email;
    //       contact.phone = req.body.phone;
    //       contact.imageUrl = req.body.imageUrl;
    //       contact.group = req.body.group;

    //       Contact.updateOne({ id: req.params.id }, contact)
    //         .then(result => {
    //           res.status(204).json({
    //             message: 'Contact updated successfully'
    //           })
    //         })
    //         .catch(error => {
    //            res.status(500).json({
    //            message: 'An error occurred',
    //            error: error
    //          });
    //         });
    //     })
    //     .catch(error => {
    //       res.status(500).json({
    //         message: 'Contact not found.',
    //         error: { contact: 'Contact not found'}
    //       });
    //     });
    // });

module.exports = router;