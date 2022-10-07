import type { NextPage } from "next";

import { VStack, HStack, Flex, Box } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { setSelectedId } from "../redux/features/transactionSlice";
import {
  Header,
  Balance,
  Statistics,
  History,
  AddTransaction,
} from "../components";
const Home: NextPage = () => {
  const dispatch = useDispatch();

  return (
    <Flex justify="center" bg="blackAlpha.200" h="120vh" align="start">
      <VStack align="start" mt={8} maxW="45vh" w="full" p={5} spacing={6}>
        <Header />
        <Balance />
        <Statistics />
        <History />
        <AddTransaction />
      </VStack>
    </Flex>
  );
};

export default Home;
