import mongoose from 'mongoose';

// Post Schema
const postSchema = mongoose.Schema({
  author: {
    type: String,
    required: true
  },
  text: {
    type: String,
    required: true
  }
});

export default mongoose.model('Posts', postSchema);
