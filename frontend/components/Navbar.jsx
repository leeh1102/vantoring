import { categoryList } from "@/services/categories";
import theme from "@/theme";
import { HamburgerIcon } from "@chakra-ui/icons";
import { Link } from "@chakra-ui/next-js";
import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  HStack,
  IconButton,
  VStack,
  useDisclosure,
  useMediaQuery,
} from "@chakra-ui/react";
import Image from "next/image";
import CategoryItem from "./CategoryItem";
import useMobile from "@/hooks/useMobile";

export const Navbar = () => {
  const isMobile = useMobile();

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <VStack spacing={0}>
      <HStack
        bg="menuBg"
        maxW="full"
        w="full"
        justifyContent="space-between"
        py={0}
        px={2}
      >
        <Link href="/">
          <Image
            src="/vantoring_logo.png"
            alt="Vantoring Logo"
            width={200}
            height={50}
          />
        </Link>
        {isMobile && (
          <IconButton
            variant="ghost"
            colorScheme="whiteAlpha"
            aria-label="Menu"
            icon={<HamburgerIcon />}
            onClick={onOpen}
          />
        )}
      </HStack>
      {isMobile ? (
        <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
          <DrawerOverlay />
          <DrawerContent bg="menuBg">
            <DrawerCloseButton color="whiteAlpha.700" />
            <DrawerBody mt={12} p={0}>
              {categoryList.map((category) => (
                <CategoryItem
                  key={category.path}
                  category={category}
                  size="sm"
                  onClick={onClose}
                />
              ))}
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      ) : (
        <HStack spacing={0} p={0} bg="menuBg" w="full" overflowY="auto">
          {categoryList.map((category) => (
            <CategoryItem key={category.path} category={category} />
          ))}
        </HStack>
      )}
    </VStack>
  );
};
