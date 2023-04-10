import { Container, Heading, Text } from "@chakra-ui/layout";
import Head from "next/head";
import AllQuestions from "../components/AllQuestions";
import api from "../services/api";

export async function getServerSideProps() {
  const questions = await api.getQuestions();
  return {
    props: { questions },
  };
}

export default function Home({ questions }) {
  return (
    <>
      <Head>
        <title>Vantoring</title>
      </Head>
      <Container p={10} maxW="none">
        <AllQuestions initialQuestions={questions} />
      </Container>
    </>
  );
}
