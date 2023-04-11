const { Mentor } = require("../models/Mentor");

const getAll = async () => {
  const mentors = await Mentor.find();
  return mentors;
};

const create = async (mentor) => {
  const newMentor = new Mentor(mentor);
  await newMentor.save();
  return newMentor;
};

const getOne = async (id) => {
  const mentor = await Mentor.findById(id);
  return mentor;
};

const mentorService = {
  getAll,
  create,
  getOne
};

module.exports = mentorService;
