import React from "react";
import { Navbar } from "./Navbar";
import { AbsoluteCenter, Box, Container, Flex, HStack } from "@chakra-ui/react";
import SearchBar from "./SearchBar";
import WriteButton from "./WriteButton";
import useMobile from "@/hooks/useMobile";

const Layout = ({ children }) => {
  const isMobile = useMobile();

  const searchComponent = isMobile ? (
    <SearchBar />
  ) : (
    <AbsoluteCenter axis="horizontal">
      <SearchBar />
    </AbsoluteCenter>
  );

  return (
    <Container maxW="full" minH="100vh" padding={0} bg="textBg">
      <Navbar />
      <HStack justifyContent="flex-end" py={4} px={[4, 10]}>
        {searchComponent}
        <WriteButton />
      </HStack>
      {children}
    </Container>
  );
};

export default Layout;
