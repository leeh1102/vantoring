const { Question } = require("../models/question");

const getAll = async () => {
  const questions = await Question.find().populate("mentor");
  return questions;
};

const create = async (question) => {
  const newQuestion = new Question(question);
  await newQuestion.save();
  return newQuestion;
};

const questionService = {
  getAll,
  create
};

module.exports = questionService;
