import { useState, useEffect } from 'react';
import categories from '@/services/categories';
import { Container, Text } from '@chakra-ui/react';
import Head from 'next/head';
import { useRouter } from 'next/router';

const CategoryPage = () => {
  const router = useRouter();
  const { pathId } = router.query;
  const [category, setCategory] = useState(null);

  useEffect(() => {
    if (pathId !== undefined) {
      setCategory(categories[pathId]);
    }
  }, [pathId]);

  return (
    <>
      <Head>
        <title>Vantoring - {category?.title}</title>
      </Head>
      <Container p={10}>
        <Text>Category ID: {pathId}</Text>
        {category && <Text>Category Title: {category.title}</Text>}
      </Container>
    </>
  );
};

export default CategoryPage;