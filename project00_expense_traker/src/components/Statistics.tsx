import { Divider, HStack, Text, VStack } from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux";

const Statistics = () => {
  const { income, expense } = useSelector(
    (state: any) => state.transaction.statistics
  );

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
        <Text color="green.400">${income}</Text>
      </VStack>
      <Divider orientation="vertical" height="50px" width="2px" />
      <VStack spacing={0} fontSize="md" fontWeight={500}>
        <Text>Expense</Text>
        <Text color="red.400">${expense}</Text>
      </VStack>
    </HStack>
  );
};

export default Statistics;
