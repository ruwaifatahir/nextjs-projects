import { Heading, VStack } from "@chakra-ui/react";

const Balance = () => {
  return (
    <VStack>
      <Heading size="sm" fontWeight={500}>
        YOUR BALANCE
      </Heading>
      <Heading size="lg" fontWeight={500}>
        $260.00
      </Heading>
    </VStack>
  );
};

export default Balance;
