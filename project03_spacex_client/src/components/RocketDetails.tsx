import { Divider, Heading, HStack, Text, VStack } from "@chakra-ui/react";

const LaunchDetails = ({ rocket }: any) => {

  const {
    rocket_name,
    rocket_type,
    rocket: { id },
  } = rocket || {};

  //   const color = success ? "green.500" : "red.500";
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
        <Text>Rocket ID: {id}</Text>
        <Divider />
        <Text>Rocket Name: {rocket_name} </Text>
        <Divider />

        <Text>Rocket Type: {rocket_type}</Text>
      </VStack>
    </VStack>
  );
};

export default LaunchDetails;
