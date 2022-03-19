var mongoose = require('mongoose');

const menuSchema = mongoose.Schema({
  id: { type: String, required: true },
  name: { type: String, required: true },
  imgUrl: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true }
});

module.exports = mongoose.model('Menu', menuSchema);
