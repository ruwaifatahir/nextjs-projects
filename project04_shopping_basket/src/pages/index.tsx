import {
  Box,
  VStack,
  SimpleGrid,
  Heading,
  Button,
  useColorModeValue,
  HStack,
} from "@chakra-ui/react";
import type { NextPage } from "next";
import { Card, Footer } from "../components";
const Home: NextPage = () => {
  const logoNameColor = useColorModeValue("blue.600", "blue.200");

  return (
    <VStack spacing={16} my={8} mx={4} align={"center"} >
      <HStack spacing={2}>
        {" "}
        
        <Heading size="sm" fontWeight="400">
          Add Products to Cart for Shopping and See the cart items
        </Heading>
        <Button
          color={logoNameColor}
          colorScheme={logoNameColor}
          variant="outline"
          size="xs"
          px={3}
          py={4}
        >
          Here
        </Button>
      </HStack>

      <SimpleGrid columns={{ sm: 2, md: 3, lg: 5 }} spacingX={6} spacingY={16}>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </SimpleGrid>
      <Footer />
    </VStack>
  );
};

export default Home;
