import api from "@/services/api";
import { Box, Grid, Heading, Text } from "@chakra-ui/react";
import { useQuery } from "react-query";
import QuestionCard from "./QuestionCard";

const AllQuestions = ({ initialQuestions }) => {
  const { data: questions } = useQuery({
    queryKey: "questions",
    queryFn: api.getQuestions,
    initialData: initialQuestions,
  });

  return (
    <Grid templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }} gap={6}>
      {questions.map((question) => (
        <QuestionCard question={question} key={question._id} />
      ))}
    </Grid>
  );
};

export default AllQuestions;
