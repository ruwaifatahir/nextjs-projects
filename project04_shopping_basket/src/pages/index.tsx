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
import Link from "next/link";
import { Card, Footer } from "../components";
const Home: NextPage = ({ data }: any) => {
  const logoNameColor = useColorModeValue("blue.600", "blue.200");
  return (
    <VStack spacing={16} my={8} mx={4} align={"center"}>
      <HStack spacing={2}>
        {" "}
        <Heading size="sm" fontWeight="400">
          Add Products to Cart for Shopping and See the cart items
        </Heading>
        <Link href="/cart">
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
        </Link>
      </HStack>

      <SimpleGrid
        columns={{ sm: 2, md: 3, lg: 5 }}
        spacingX={6}
        spacingY={16}
        px={20}
      >
        {data.map(({ image, price, rating, title }: any, index: any) => (
          <Card data={{ id: index, image, price, rating, title }} key={index} />
        ))}

        {/* <Card />
        <Card />
        <Card />
        <Card /> */}
      </SimpleGrid>
      <Footer />
    </VStack>
  );
};

export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch("https://fakestoreapi.com/products");
  const data = await res.json();

  // Pass data to the page via props
  return { props: { data } };
}

export default Home;
