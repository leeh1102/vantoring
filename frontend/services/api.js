import axios from "axios";

const API_URL = `http://localhost:8080/api`;

const getQuestions = async () => {
  const res = await axios.get(`${API_URL}/questions`);
  const { data: questions } = await res.data;

  return questions.map((question) => ({
    ...question,
    mentorName: `${question.mentor.firstName} ${question.mentor.lastName}`,
  }));
};

const api = {
  getQuestions,
};

export default api;
