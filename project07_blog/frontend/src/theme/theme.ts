import { extendTheme } from "@chakra-ui/react";

const navLink = {
  variant: "ghost",
  fontSize: "2xl",
  fontWeight: "600",
  _focus: { fontWeight: 700, bg: "white" },
  _hover: { bg: "white", color: "blackAlpha.600" },
};

export const theme = extendTheme({
  components: {
    Button: {
      variants: {
        "nav-link": navLink,
      },
    },
  },
});
