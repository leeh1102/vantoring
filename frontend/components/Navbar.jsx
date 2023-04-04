import { categoryList } from "@/services/categories";
import { Container, HStack, VStack } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import CategoryItem from "./CategoryItem";
import { Link } from "@chakra-ui/next-js";

export const Navbar = () => {
  return (
    <VStack spacing={0}>
      <Container bg="menuBg" maxW="full" py={0}>
        <Link href="/">
          <Image
            src="/vantoring_logo.png"
            alt="Vantoring Logo"
            width={200}
            height={50}
          />
        </Link>
      </Container>
      <HStack
        spacing={0}
        py={0}
        bg="menuBg"
        w="full"
        justifyContent="space-around"
      >
        {categoryList.map((category) => (
          <CategoryItem key={category.path} category={category} />
        ))}
      </HStack>
    </VStack>
  );
};
