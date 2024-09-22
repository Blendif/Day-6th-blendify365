const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title: String,
  description: String,
  ebookLink: String,
  audiobookLink: String,
});

module.exports = mongoose.model('Book', bookSchema);
