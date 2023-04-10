import {
  Box,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  HStack,
  Heading,
  Tag,
  TagLabel,
  Text,
} from "@chakra-ui/react";
import React from "react";

const QuestionCard = ({ question }) => {
  return (
    <Card>
      <CardHeader pb={0}>
        <Tag px={3} backgroundColor={"primary"} borderRadius={"full"}>
          <TagLabel color="white" fontWeight="bold">
            {question.category}
          </TagLabel>
        </Tag>
      </CardHeader>
      <CardBody display="flex" flexDir={"column"} gap={2}>
        <Heading size="md">{question.title}</Heading>
        <Text>{question.contents}</Text>
      </CardBody>
      <CardFooter
        display={"flex"}
        flexDir="column"
        justifyContent={"space-between"}
      >
        <Text color="gray.500" mb={1} fontWeight="bold">
          Author: {question.author}
        </Text>
        <HStack justifyContent={"space-between"}>
          {question.mentorName && (
            <Text color="gray.500">Mentor: {question.mentorName}</Text>
          )}
          <Text color="gray.500">
            {new Date(question.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "2-digit",
              day: "2-digit",
            })}
          </Text>
        </HStack>
      </CardFooter>
    </Card>
  );
};

export default QuestionCard;
