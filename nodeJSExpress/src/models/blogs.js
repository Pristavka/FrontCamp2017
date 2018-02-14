const mongoose = require('mongoose');

// Blogs Schema
const blogsSchema = mongoose.Schema({
  author: {
    type: String,
    required: true
  },
  text: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Blogs', blogsSchema);