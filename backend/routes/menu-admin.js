const express = require('express');
const router = express.Router();
const Menu = require('../models/menu');
const sequenceGenerator = require('./sequence-generator');

// update
router.put('/:id', (req, res, next) => {
  Menu.findOne({ id: req.params.id })
    .then(menu => {
      menu.name = req.body.name;
      menu.description = req.body.description;
      menu.price = req.body.price;
      menu.imgUrl = req.body.imgUrl;

      Menu.updateOne({ id: req.params.id }, menu)
        .then(result => {
          res.status(204).json({
            message: 'Menu updated successfully'
          })
        })
        .catch(error => {
           res.status(500).json({
           message: 'An error occurred',
           error: error
         });
        });
    })
    .catch(error => {
      res.status(500).json({
        message: 'Menu not found.',
        error: { menu: 'Menu not found'}
      });
    });
});

// create
  router.post('/new', (req, res, next) => {
    console.log("POST");

    const maxMenuId = sequenceGenerator.nextId("menu");

    const entree = new Menu({
      id: maxMenuId,
      name: req.body.name,
      description: req.body.description,
      price: req.body.price,
      imgUrl: req.body.imgUrl
    });

    entree.save()
      .then(createdEntree => {
        res.status(201).json({
          message: 'menu item added successfully',
          menu: createdEntree
        });
      })
      .catch(error => {
         res.status(500).json({
            message: 'An error occurred',
            error: error
          });
      });
  });

  // delete
  router.delete("/:id", (req, res, next) => {
    Menu.findOne({ id: req.params.id })
      .then(menu => {

        Menu.deleteOne({ id: req.params.id })
          .then(result => {
            res.status(204).json({
              message: "Document deleted successfully"
            });
          })
          .catch(error => {
             res.status(500).json({
             message: 'An error occurred',
             error: error
           });
          })
      })
      .catch(error => {
        res.status(500).json({
          message: 'Document not found.',
          error: { menu: 'Document not found'}
        });
      });
  });

module.exports = router;
