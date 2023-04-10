import useMobile from "@/hooks/useMobile";
import { SearchIcon } from "@chakra-ui/icons";
import { HStack, IconButton, Input, VStack } from "@chakra-ui/react";

const SearchBar = () => {
  const isMobile = useMobile();

  return (
    <HStack
      bg="gray.50"
      py={2}
      px={2}
      pl={4}
      borderRadius="md"
      w="full"
      maxW={isMobile ? "full" : "lg"}
      justifyContent="center"
    >
      <Input
        placeholder="Search..."
        variant="unstyled"
        flex="1"
        w={isMobile ? "full" : "80"}
      />
      <IconButton borderRadius="md" icon={<SearchIcon />} variant="secondary" />
    </HStack>
  );
};

export default SearchBar;
