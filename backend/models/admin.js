var mongoose = require('mongoose');

const adminSchema = mongoose.Schema({
  title: { type: String, required: true },
  logoImgUrl: { type: String, required: false },
  primaryColor: { type: String, required: true },
  secondaryColor: { type: String, required: true },
  tertiaryColor: { type: String, required: true },
  id: { type: String, required: true }
});

module.exports = mongoose.model('Admin', adminSchema);
