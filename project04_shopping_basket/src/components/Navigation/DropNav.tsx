//EXTERNAL IMPORTS
import { NextComponentType } from "next";
import { Text, useColorModeValue, VStack } from "@chakra-ui/react";

const DropNav: NextComponentType = () => {
  return (
    <VStack
      h={20}
      align="start"
      fontSize="md"
      px={6}
      fontWeight={500}
      pos="fixed"
      w="full"
      zIndex="sticky"
      bg={useColorModeValue("gray.100", "gray.900")}
      css={{
        backdropFilter: "saturate(180%) blur(10px)",
        backgroundColor: useColorModeValue(
          "rgba(255, 255, 255, 0.7)",
          "rgba(26, 32, 44, 0.9)"
        ),
      }}
    >
      <Text>Products</Text>
      <Text>Cart</Text>
    </VStack>
  );
};

export default DropNav;
