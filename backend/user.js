const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  created_by: { type: String, required: true }, // New property
}, { timestamps: true });

const Item = mongoose.model('Item', itemSchema);

module.exports = Item;