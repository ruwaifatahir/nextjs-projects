import { Divider, Heading, HStack, Text, VStack } from "@chakra-ui/react";
import React from "react";

const LaunchDetails = ({ data }: any) => {
  const { year, success, id } = data || {};

  const color = success ? "green.500" : "red.500";
  return (
    <VStack align="start" spacing={5} w="full">
      <Heading size="lg" color="whiteAlpha.800">
        Launch Details:
      </Heading>
      <VStack
        w="80%"
        py={4}
        px={5}
        spacing={3}
        align="start"
        fontSize="sm"
        fontWeight={500}
        bg="whiteAlpha.400"
        color="whiteAlpha.600"
        rounded="md"
      >
        <Text>Flight Number: {id}</Text>
        <Divider />
        <Text>Launch Year: {year}</Text>
        <Divider />

        <HStack>
          <Text>Launch Success:</Text>
          <Text color={color}>{String(success).toUpperCase()}</Text>
        </HStack>
      </VStack>
    </VStack>
  );
};

export default LaunchDetails;
