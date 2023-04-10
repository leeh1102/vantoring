import { SearchIcon } from "@chakra-ui/icons";
import {
  Button,
  HStack,
  Input,
  useMediaQuery,
  VStack,
} from "@chakra-ui/react";

const SearchBar = () => {
  const [isMobile] = useMediaQuery("(max-width: 768px)");

  return (
    <VStack spacing={isMobile ? 4 : 0}>
      <HStack
        bg="gray.100"
        py={2}
        px={4}
        borderRadius="md"
        maxW={isMobile ? "full" : "lg"}
        justifyContent="center"
      >
        <Input placeholder="Search..." variant="unstyled" flex="1" w={isMobile ? "full" : "80"}/>
        <Button
          colorScheme="teal"
          px={isMobile ? 2 : 4}
          py={2}
          borderRadius="md"
          leftIcon={<SearchIcon />}
          bgColor="#0064DE"
          color="white"
          _hover={{ bgColor: "#0052B4" }}
          _active={{ bgColor: "#0052B4" }}
          _focus={{ boxShadow: "none" }}
        />
      </HStack>
    </VStack>
  );
};

export default SearchBar;
