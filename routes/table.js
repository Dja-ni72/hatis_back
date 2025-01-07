const express = require('express');
const router = express.Router();
const Table = require('../models/table');

router.get('/', async (req, res) => {
  const data = await Table.find();
  res.json(data);
});

router.post('/', async (req, res) => {
  const { row, col, value } = req.body;

  const cell = await Table.findOneAndUpdate(
    { row, col },
    { value },
    { new: true, upsert: true }
  );
  res.json({ success: true, cell });
});

router.post('/reset', async (req, res) => {
  try {
    const defaultData = req.body; 
    await Table.deleteMany();
    await Table.insertMany(defaultData); 
    res.status(200).json({ success: true });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Failed to reset table' });
  }
});


module.exports = router;
