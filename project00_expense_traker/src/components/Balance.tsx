import { Heading, VStack } from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux";

const Balance = () => {
  const { income, expense } = useSelector(
    (state: any) => state.transaction.statistics
  );
  const total = income - expense > 0 ? income - expense : 0;
  return (
    <VStack>
      <Heading size="sm" fontWeight={500}>
        YOUR BALANCE
      </Heading>
      <Heading size="lg" fontWeight={500}>
        ${total}
      </Heading>
    </VStack>
  );
};

export default Balance;
