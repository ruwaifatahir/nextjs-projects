import { NextComponentType } from "next";

import { Navbar, HamNavbar } from "./";
import { Box, useColorModeValue, Show } from "@chakra-ui/react";
const Navigation: NextComponentType = () => {
  return (
    <Box
      pos="sticky"
      top="0"
      zIndex="sticky"
      bg={useColorModeValue("gray.100", "gray.900")}
      css={{
        backdropFilter: "saturate(180%) blur(5px)",
        backgroundColor: useColorModeValue(
          "rgba(255, 255, 255, 0.7)",
          "rgba(26, 32, 44, 0.9)"
        ),
      }}
    >
      <Show above="lg">
        <Navbar />
      </Show>
      <Show below="lg">
        <HamNavbar />
      </Show>
    </Box>
  );
};

export default Navigation;
