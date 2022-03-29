var mongoose = require('mongoose');

const sequenceSchema = mongoose.Schema({
  maxMenuId: { type: Number }
});

module.exports = mongoose.model('Sequence', sequenceSchema);
