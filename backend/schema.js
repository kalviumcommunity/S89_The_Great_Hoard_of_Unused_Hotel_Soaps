const mongoose = require('mongoose');

// Check if the model is already compiled
const Item = mongoose.models.Item || mongoose.model('Item', new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  created_by: { type: String, required: true },
}, { timestamps: true }));

module.exports = Item;