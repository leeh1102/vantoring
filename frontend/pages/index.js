import Write from "@/components/Write";
import { Container, Heading, Text } from "@chakra-ui/layout";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Vantoring</title>
      </Head>
      <Container p={10}>
        <Heading mb={3}>Vantoring Application</Heading>
        <Write/>
        <Text>환영합니다</Text>
      </Container>
    </>
  );
}
