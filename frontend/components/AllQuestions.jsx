import { Box, Heading, Text, Stack } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import axios from "axios";

const AllQuestions = () => {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const result = await axios.get("http://localhost:8080/api/questions");

      console.log(result.data.data[0]);

      
      setQuestions(result.data.data);
    }
    
    fetchData();
  }, []);

  return (
    <Stack spacing={8}>
      <Heading size="md">All Questions</Heading>
      {questions.map((question) => (
        <Box key={question._id} borderWidth="1px" borderRadius="md" p={3}>
          <Heading size="sm">{question.title}</Heading>
          <Text>Author: {question.author}</Text>
          <Text>Category: {question.category}</Text>
          <Text>Content: {question.contents}</Text>
          <Text>Type: {question.type ? "Public" : "Private"}</Text>
        </Box>
      ))}
    </Stack>
  );
};

export default AllQuestions;