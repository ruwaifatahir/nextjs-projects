import { NextComponentType } from "next";
import { Button, Text, VStack, Image } from "@chakra-ui/react";

const Card: NextComponentType = () => {
  return (
    <VStack align="start" fontSize="sm" fontWeight={500} spacing={4}>
      <Image
        src="https://bit.ly/dan-abramov"
        alt="Dan Abramov"
        boxSize={{ sm: 220, lg: "180" }}
        borderRadius="lg"
      />

      <VStack align="start" spacing={0}>
        <Text color="#A0AEC0">Mens Casual Premium</Text>
        <Text>$109</Text>
      </VStack>
      <Button size="sm" variant="solid" colorScheme="blue" w="full">
        Add to Cart
      </Button>
    </VStack>
  );
};

export default Card;
