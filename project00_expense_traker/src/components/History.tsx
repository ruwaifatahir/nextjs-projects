import { VStack, Heading, Divider, Text } from "@chakra-ui/react";
import { HistoryItem } from "./";
import { useSelector, useDispatch } from "react-redux";

interface Transaction {
  id: number;
  name: string;
  amount: number;
  type: boolean;
}

const History = () => {
  const transactions = useSelector((state: any) => state.transaction.value);
  console.log(transactions);

  return (
    <VStack align="start" w="full" spacing={3}>
      <Heading size="sm" fontWeight={500}>
        History
      </Heading>
      <Divider />

      {transactions?.map(
        ({ name, amount, type }: Transaction, index: number) => (
          <HistoryItem
            key={index}
            color={type ? "green.300" : "red.300"}
            id={index}
          >
            <Text>{name}</Text>
            <Text color={type ? "green.300" : "red.300"}>+{amount}</Text>{" "}
          </HistoryItem>
        )
      )}
    </VStack>
  );
};

export default History;
