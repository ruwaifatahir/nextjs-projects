import { Heading, HStack, Text, VStack, Button } from "@chakra-ui/react";
import { NextComponentType } from "next";

const OrderSummary: NextComponentType = () => {
  return (
    <VStack
      boxShadow="dark-lg"
      w={{ base: "full", lg: "22%" }}
      m={24}
      align="start"
      p={8}
      spacing={8    }
      borderRadius="lg"
      fontSize="14"
      fontWeight="500"
      color="gray.400"
    >
      <Heading size="md" color="white">
        Order Summary
      </Heading>

      {/* <VStack spacing={4}> */}
      <HStack justify="space-between" w="full">
        <Text>Subtotal</Text>
        <Text size="sm" color="white">
          $0
        </Text>
      </HStack>
      <HStack justify="space-between" w="full">
        <Text size="base">Shipping + Tax</Text>
        <Text size="sm" color="white">
          Calculate shipping
        </Text>
      </HStack>
      <HStack justify="space-between" w="full">
        <Text size="base">Coupon Code</Text>
        <Text size="sm" color="white">
          Add coupon code
        </Text>
      </HStack>
      {/* </VStack> */}

      <HStack
        justify="space-between"
        w="full"
        fontSize="md"
        fontWeight={700}
        color="white"
      >
        <Text>Total</Text>
        <Text>$0</Text>
      </HStack>
      <Button size="md" variant="solid" colorScheme="blue" w="full">
        Checkout
      </Button>
    </VStack>
  );
};

export default OrderSummary;
