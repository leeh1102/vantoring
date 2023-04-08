const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
  mentorId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Mentor',
    required: true
  },
  title: {
    type: String,
    required: true
  },
  contents: {
    type: String,
    required: true
  },
  type: {
    type: boolean,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  author: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  category:{
    type: String,
    required: true
  },
  commentId: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: 'Comment'
  }
});

module.exports = mongoose.model('Question', questionSchema);