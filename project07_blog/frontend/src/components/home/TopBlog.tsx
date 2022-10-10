import {
  Flex,
  Heading,
  HStack,
  Image,
  Show,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";

const TopBlog = () => {
  return (
    <Flex
      w="full"
      justify="space-evenly"
      p={{ base: 2, lg: 10 }}
      maxW={{ lg: "90%" }}
      direction={{ base: "column", lg: "row" }}
    >
      {/* <Show above="lg"> */}
      <Image
        src="https://substackcdn.com/image/fetch/w_848,c_limit,f_webp,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2F640e9049-dc51-472b-829a-5dfa6db1e00c_2288x2048.png"
        boxSize={{ lg: "500" }}
        w={{ base: "full", lg: "40%" }}
      />
      {/* </Show> */}

      <VStack
        direction="column"
        align="start"
        maxW={{ lg: "50%" }}
        p={5}
        spacing={{ base: 1, lg: 5 }}
      >
        <Heading size={{ base: "xl", lg: "2xl" }}>
          Order Flows: Kingmaker of the Block Builders
        </Heading>
        <Text fontSize={{ lg: "3xl" }}>
          The Post-Merge Block Builder Battle Royale
        </Text>
      </VStack>
    </Flex>
  );
};

export default TopBlog;
