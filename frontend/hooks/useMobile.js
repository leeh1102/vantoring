import theme from "@/theme";
import { useMediaQuery } from "@chakra-ui/react";

const useMobile = () => {
  const [isMobile] = useMediaQuery(`(max-width: ${theme.breakpoints.md})`, {
    ssr: true,
    fallback: false, // return false on the server, and re-evaluate on the client side
  });

  return isMobile;
};

export default useMobile;
