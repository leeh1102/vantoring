const mongoose = require("mongoose");
const { categoryTitles, categoryKeys } = require("../constants");

const mentorSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  specialty: {
    type: String,
    required: true,
    enum: categoryKeys
  },
  bio: {
    type: String,
    required: true
  },
  questionId: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Question"
    }
  ],
  answeredQuestionId: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Question"
    }
  ]
});

const Mentor = mongoose.model("Mentor", mentorSchema);
module.exports = { Mentor };
