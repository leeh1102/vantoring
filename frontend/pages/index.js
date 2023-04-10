import { Container, Heading, Text } from "@chakra-ui/layout";
import Head from "next/head";
import AllQuestions from "../components/AllQuestions";

export default function Home() {
  return (
    <>
      <Head>
        <title>Vantoring</title>
      </Head>
      <Container p={10} maxW="none">
        <Heading mb={3}>Vantoring Application</Heading>
        <Text>환영합니다</Text>
        <AllQuestions />
      </Container>
    </>
  );
}