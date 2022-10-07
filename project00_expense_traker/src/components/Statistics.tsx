import { Divider, HStack, Text, VStack } from "@chakra-ui/react";

const Statistics = () => {
  return (
    <HStack
      w="full"
      justify="space-around"
      shadow="md"
      px={4}
      py={4}
      bg="whiteAlpha.700"
    >
      <VStack spacing={0} fontSize="md" fontWeight={500}>
        <Text>INCOME</Text>
        <Text color="green.400">$500.00</Text>
      </VStack>
      <Divider orientation="vertical" height="50px" width="2px" />
      <VStack spacing={0} fontSize="md" fontWeight={500}>
        <Text>Expense</Text>
        <Text color="red.400">$500.00</Text>
      </VStack>
    </HStack>
  );
};

export default Statistics;
