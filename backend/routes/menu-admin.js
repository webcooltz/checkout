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

  router.post('/', (req, res, next) => {
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

module.exports = router;
