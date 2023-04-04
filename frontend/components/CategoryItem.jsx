import { Link } from "@chakra-ui/next-js";
import { Box, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React, { useEffect, useMemo } from "react";

const CategoryItem = ({ category }) => {
  const { asPath } = useRouter();

  const isActiveLink =
    asPath === category.path || asPath === `/category${category.path}`;

  const linkProps = useMemo(
    () =>
      isActiveLink
        ? {
            bg: "textBg",
            color: "gray.800",
            _hover: {
              textDecoration: "inherit",
            },
          }
        : {
            bg: "menuBg",
            color: "white",
            _hover: {
              textDecoration: "inherit",
              background: "textBg",
              color: "gray.800",
            },
          },
    [isActiveLink]
  );

  return (
    <Link
      href={category.path === "/" ? "/" : `/category${category.path}`}
      w="full"
      fontSize="larger"
      fontWeight="bold"
      textAlign="center"
      {...linkProps}
    >
      <Box py={4} px={4} display="flex" justifyContent="center">
        <Text>{category.title}</Text>
      </Box>
    </Link>
  );
};

export default CategoryItem;
