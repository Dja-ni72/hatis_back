const express = require('express');
const router = express.Router();
const Table = require('../models/table');

// GET /table
router.get('/', async (req, res) => {
  const data = await Table.find();
  res.json(data);
});

// POST /table
router.post('/', async (req, res) => {
  const { row, col, value } = req.body;

  const cell = await Table.findOneAndUpdate(
    { row, col },
    { value },
    { new: true, upsert: true }
  );
  res.json({ success: true, cell });
});

module.exports = router;
