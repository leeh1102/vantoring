import categories from "@/services/categories";
import { Container, Text } from "@chakra-ui/react";
import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";

const CategoryPage = () => {
  const router = useRouter();
  const { pathId } = router.query;

  const category = categories[pathId];

  return (
    <>
      <Head>
        <title>Vantoring - {category.title}</title>
      </Head>
      <Container p={10}>
        <Text>Category ID: {pathId}</Text>
        {category && <Text>Category Title: {category.title}</Text>}
      </Container>
    </>
  );
};

export default CategoryPage;
