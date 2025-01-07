const mongoose = require('mongoose');

const TableSchema = new mongoose.Schema({
  row: Number,
  col: String,
  value: String,
});

module.exports = mongoose.model('Table', TableSchema);
