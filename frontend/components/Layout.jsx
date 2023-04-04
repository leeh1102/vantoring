import React from "react";
import { Navbar } from "./Navbar";
import { Container } from "@chakra-ui/react";

const Layout = ({ children }) => {
  return (
    <Container maxW="full" minH="100vh" padding={0} bg="textBg">
      <Navbar />
      {children}
    </Container>
  );
};

export default Layout;
