import { Heading, HStack } from "@chakra-ui/react";
import React from "react";

const Footer = () => {
  return (
    <HStack w="full" maxW="90%" justify="center" m={14} >
      <Heading size="xl" color="white">
        Built with Next.js, Chakra UI, Apollo Client,GraphQL and ❤️
      </Heading>
    </HStack>
  );
};

export default Footer;
