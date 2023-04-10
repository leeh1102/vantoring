import React from "react";
import { Navbar } from "./Navbar";
import { Container, Flex } from "@chakra-ui/react";
import SearchBar from "./SearchBar";
import WriteButton from "./WriteButton";

const Layout = ({ children }) => {
  return (
    <Container maxW="full" minH="100vh" padding={0} bg="textBg">
      <Navbar />
      <Flex justifyContent="space-between" alignItems="center" my={4}>
        <Flex justifyContent="center" alignItems="center" flex="1" ml={20}>
          <SearchBar />
        </Flex>
        <Flex mr={20}>
          <WriteButton />
        </Flex>
      </Flex>
      {children}
    </Container>
  );
};

export default Layout;