const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
  mentor: {
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
    type: Boolean,
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
  category: {
    type: String,
    required: true
  },
  commentId: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: 'Comment'
  }
});

const Question = mongoose.model('Question', questionSchema);
module.exports = { Question };
