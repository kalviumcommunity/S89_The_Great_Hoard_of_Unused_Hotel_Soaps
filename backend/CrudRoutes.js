const express = require('express');
const router = express.Router();
const Item = require("./schema");

// POST endpoint with inline validation
router.post('/items', async (req, res) => {
  const { name, description, created_by } = req.body;

  // Inline validation
  if (!name || typeof name !== 'string' || name.trim() === '') {
    return res.status(400).json({ message: "Name is required and must be a non-empty string" });
  }
  if (!description || typeof description !== 'string' || description.trim() === '') {
    return res.status(400).json({ message: "Description is required and must be a non-empty string" });
  }
  if (!created_by || typeof created_by !== 'string' || created_by.trim() === '') {
    return res.status(400).json({ message: "Created_by is required and must be a non-empty string" });
  }

  try {
    const item = new Item({ name, description, created_by });
    const savedItem = await item.save();
    res.status(201).json(savedItem);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// PUT endpoint with inline validation
router.put('/items/:id', async (req, res) => {
  const { name, description } = req.body;

  // Inline validation
  if (!name || typeof name !== 'string' || name.trim() === '') {
    return res.status(400).json({ message: "Name is required and must be a non-empty string" });
  }
  if (!description || typeof description !== 'string' || description.trim() === '') {
    return res.status(400).json({ message: "Description is required and must be a non-empty string" });
  }

  try {
    const updatedItem = await Item.findByIdAndUpdate(req.params.id, { name, description }, { new: true });
    if (!updatedItem) return res.status(404).json({ message: "Item not found" });
    res.json(updatedItem);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// GET all items (with optional filter by created_by)
router.get('/items', async (req, res) => {
  const { created_by } = req.query;

  try {
    const query = created_by ? { created_by } : {};
    const items = await Item.find(query);
    res.json(items);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// GET a single item by ID
router.get('/items/:id', async (req, res) => {
  try {
    const item = await Item.findById(req.params.id);
    if (!item) return res.status(404).json({ message: "Item not found" });
    res.json(item);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// DELETE an item by ID
router.delete('/items/:id', async (req, res) => {
  try {
    const deletedItem = await Item.findByIdAndDelete(req.params.id);
    if (!deletedItem) return res.status(404).json({ message: "Item not found" });
    res.json({ message: "Item deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;