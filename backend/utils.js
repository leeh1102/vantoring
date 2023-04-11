const parsePostData = (data) => {
  const { mentor, title, contents, type, author, password, category } = data;
  return {
    mentor,
    title,
    contents,
    type,
    author,
    password,
    category
  };
};

const parseMentorData = (data) => {
  const { firstName, lastName, email, specialty, bio } = data;
  return {
    firstName,
    lastName,
    email,
    specialty,
    bio
  };
};

const utils = {
  parsePostData,
  parseMentorData
};

module.exports = utils;
