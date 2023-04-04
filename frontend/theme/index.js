import { extendTheme, theme as base } from "@chakra-ui/react";
import { Nanum_Gothic } from "next/font/google";

const nanumGothic = Nanum_Gothic({ subsets: ["latin"], weight: "400" });

const theme = extendTheme({
  fonts: {
    heading: `${nanumGothic.style.fontFamily}, ${base.fonts?.heading}`,
    body: `${nanumGothic.style.fontFamily}, ${base.fonts?.body}`,
  },
});

export default theme;
