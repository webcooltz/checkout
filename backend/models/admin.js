var mongoose = require('mongoose');

const adminSchema = mongoose.Schema({
  logoImgUrl: { type: String, required: true },
  title: { type: String, required: true },
  colors: { type: Object, required: true },
});

module.exports = mongoose.model('Admin', adminSchema);
