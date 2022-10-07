import { Heading, VStack } from "@chakra-ui/react";

const Header = () => {
  return (
    <VStack w="full" mb={4}>
      <Heading fontWeight={500} size="md">
        Expense Tracker
      </Heading>
    </VStack>
  );
};

export default Header;
