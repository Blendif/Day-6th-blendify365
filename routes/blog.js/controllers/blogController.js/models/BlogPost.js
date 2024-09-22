const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
  title: String,
  excerpt: String,
  content: String,
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('BlogPost', blogSchema);
