import {
  Button,
  Divider,
  Heading,
  HStack,
  Input,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";

import { useSelector, useDispatch } from "react-redux";

import {
  addTransaction,
  removeTransaction,
} from "../redux/features/transactionSlice";

const AddTransaction = () => {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState(0);

  const count = useSelector((state: any) => state.transaction.count);
  const value = useSelector((state: any) => state.transaction.value);
  const selectedId = useSelector((state: any) => state.transaction.selectedId);
  console.log(selectedId);
  const dispatch = useDispatch();

  return (
    <VStack w="full" align="start" fontWeight="500" spacing={3}>
      <Heading size="md">Add new transaction</Heading>
      <Divider />

      <Text fontSize={14}>Text</Text>
      <Input
        type="text"
        placeholder="Enter text..."
        bg="white"
        rounded="none"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <Text fontSize={14}>Amount</Text>
      <Input
        type="number"
        placeholder="Enter amount..."
        bg="white"
        rounded="none"
        value={amount}
        onChange={(e) => setAmount(Number(e.target.value))}
      />

      <HStack justify="center" w="full">
        <Button
          bg="purple.400"
          size="sm"
          color="white"
          rounded="none"
          disabled={name && amount ? false : true}
          w="full"
          _hover={{
            bg: "purple.500",
          }}
          onClick={() =>
            dispatch(
              addTransaction({
                id: count,
                name,
                amount,
                type: true,
              })
            )
          }
        >
          Add Transaction
        </Button>
        <Button
          bg="purple.400"
          size="sm"
          color="white"
          rounded="none"
          w="full"
          disabled={selectedId >= 0 ? false : true}
          _hover={{
            bg: "purple.500",
          }}
          onClick={() => dispatch(removeTransaction(selectedId))}
        >
          Delete Transaction
        </Button>
      </HStack>
    </VStack>
  );
};

export default AddTransaction;
