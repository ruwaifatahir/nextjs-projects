import {
  Heading,
  HStack,
  Text,
  VStack,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";
import { NextComponentType } from "next";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const OrderSummary: NextComponentType = () => {
  const [totalPrice, setTotalPrice] = useState(0);
  const cart = useSelector((state: any) => state.cart.cartItems);
  console.log(cart);

  useEffect(() => {
    const handleTotalPrice = () => {
      let total: any = 0;
      cart.forEach((item: any) => {
        total += item.price;
      });

      total = total.toFixed(2);
      setTotalPrice(total);
    };
    handleTotalPrice();
  }, [cart]);

  console.log(totalPrice);

  const tColor = useColorModeValue("black", "white");
  const sColor = useColorModeValue("gray.600", "white");
  return (
    <VStack
      boxShadow="dark-lg"
      w={{ base: "full", lg: "22%" }}
      m={24}
      align="start"
      p={8}
      spacing={8}
      borderRadius="lg"
      fontSize="14"
      fontWeight="500"
      color="gray.400"
    >
      <Heading size="md" color={tColor}>
        Order Summary
      </Heading>

      <HStack justify="space-between" w="full">
        <Text>Subtotal</Text>
        <Text size="sm" color={sColor}>
          ${totalPrice}
        </Text>
      </HStack>
      <HStack justify="space-between" w="full">
        <Text >Shipping + Tax</Text>
        <Text color={sColor} as="u">
          Calculate shipping
        </Text>
      </HStack>
      <HStack justify="space-between" w="full">
        <Text size="base">Coupon Code</Text>
        <Text size="sm" color={sColor} as="u">
          Add coupon code
        </Text>
      </HStack>

      <HStack
        justify="space-between"
        w="full"
        fontSize="md"
        fontWeight={700}
        color={tColor}
      >
        <Text>Total</Text>
        <Text>${totalPrice}</Text>
      </HStack>
      <Button size="md" variant="solid" colorScheme="blue" w="full">
        Checkout
      </Button>
    </VStack>
  );
};

export default OrderSummary;
