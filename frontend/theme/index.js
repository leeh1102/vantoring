import { extendTheme, theme as base } from "@chakra-ui/react";
import { Nanum_Gothic } from "next/font/google";

const nanumGothic = Nanum_Gothic({ subsets: ["latin"], weight: "400" });

const theme = extendTheme({
  fonts: {
    heading: `${nanumGothic.style.fontFamily}, ${base.fonts?.heading}`,
    body: `${nanumGothic.style.fontFamily}, ${base.fonts?.body}`,
  },
  colors: {
    primary: "#013066",
    secondary: "#0064de",
    menuBg: "#65728A",
    textBg: "#F3F4F8",
    error: "#E82F0F",
  },
});

export default theme;
