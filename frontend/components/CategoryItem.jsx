import { Link } from "@chakra-ui/next-js";
import { Box, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React, { useEffect, useMemo } from "react";

const CategoryItem = ({ category, size = "md", onClick }) => {
  const { asPath } = useRouter();

  const isActiveLink =
    asPath === category.path || asPath === `/category${category.path}`;

  const sizeProps = size === "md" ? { p: 4 } : { p: 2 };

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
      fontSize={size === "md" ? "larger" : "md"}
      fontWeight={size === "md" ? "bold" : "normal"}
      textAlign="center"
      display="block"
      onClick={onClick}
      {...linkProps}
    >
      <Box {...sizeProps} display="flex" justifyContent="center">
        <Text whiteSpace="nowrap">{category.title}</Text>
      </Box>
    </Link>
  );
};

export default CategoryItem;
