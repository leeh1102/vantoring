import { Box, Heading, Text, Stack, Grid } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import axios from "axios";

const AllQuestions = () => {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const result = await axios.get("http://localhost:8080/api/questions");
      console.log(result.data.data)
      const questionsWithMentors = await Promise.all(result.data.data.map(async (question) => {
        const mentorId = question.mentorId;
        if (!mentorId) return question;
        const mentor = await axios.get(`http://localhost:8080/api/mentor/${mentorId}`);
        return { ...question, mentorName: mentor.data.data.firstName + " " + mentor.data.data.lastName};
      }));
      setQuestions(questionsWithMentors);
    }

    fetchData();
  }, []);

  return (
    <Grid templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }} gap={6}>
      {questions.map((question) => (
        <Box
          key={question._id}
          borderWidth="1px"
          borderRadius="md"
          p={4}
          width="100%"
          backgroundColor="white"
        >
          <Text
            backgroundColor="#013066"
            color="white"
            fontSize="sm"
            fontWeight="bold"
            borderRadius="md"
            px={2}
            py={1}
            mb={2}
          >
            {question.category}
          </Text>
          <Heading size="sm" mb={2}>
            {question.title}
          </Heading>
          <Text mb={2}>{question.contents}</Text>
          <Text color="gray.500" mb={1}>
            Author: {question.author}
          </Text>
          {question.mentorName && (
            <Text color="gray.500">
              Mentor: {question.mentorName}
            </Text>
          )}
          <Text color="gray.500">
            {new Date(question.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "2-digit",
              day: "2-digit",
            })}
          </Text>
        </Box>
      ))}
    </Grid>
  );
};

export default AllQuestions;
