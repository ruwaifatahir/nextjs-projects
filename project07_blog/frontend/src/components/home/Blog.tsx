import {
  Heading,
  HStack,
  Image,
  VStack,
  Text,
  Flex,
  Show,
} from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

const Blog: any = ({ data }: any) => {
  const { title, description, image, slug } = data || {};
  return (
    <Link href={`/${slug}`}>
      <Flex
        align="start"
        maxW="80%"
        w="full"
        _hover={{ bg: "gray.100" }}
        p={{ lg: 10 }}
      >
        <Show above="lg">
          <Image src={`http://localhost:1337${image}`} boxSize="250" />
        </Show>

        <VStack align="start" ml={{ lg: 10 }} mx={{ base: 5 }}>
          <Heading size={{ base: "md", lg: "2xl" }}>{title}</Heading>
          <Text fontSize={{ base: "md", lg: "3xl" }} color="gray.500">
            {description}
          </Text>
        </VStack>
      </Flex>
    </Link>
  );
};

export default Blog;
