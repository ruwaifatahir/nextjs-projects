import { Button, Divider, HStack, Text, VStack } from "@chakra-ui/react";
import React from "react";

const Navigation = () => {
  return (
    <VStack w="full" spacing={5}>
      <Divider />
      <HStack
        w="full"
        justify="center"
        fontSize="2xl"
        fontWeight={600}
        spacing={5}
      >
        <Button variant="nav-link">Home</Button>
        <Button variant="nav-link">Archive</Button>
        <Button variant="nav-link">About</Button>
      </HStack>
      <Divider />
    </VStack>
  );
};

export default Navigation;
