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
  const [amount, setAmount] = useState("");

  const { count, selectedId } = useSelector((state: any) => state.transaction);
  // const selectedId = useSelector((state: any) => state.transaction.selectedId);
  console.log(selectedId);
  const dispatch = useDispatch();

  const handleAddTransaction = () => {
    const tempAmount = amount.split("");

    if (tempAmount[0] == "+" || tempAmount[0] == "-") {
      let status = tempAmount[0] == "+" ? true : false;
      dispatch(
        addTransaction({
          id: count,
          name,
          amount: Number(amount.slice(1, amount.length)),
          type: status,
        })
      );
    }
  };

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
        type="text"
        placeholder="Enter amount..."
        bg="white"
        rounded="none"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
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
          onClick={() => {
            handleAddTransaction();
          }}
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
