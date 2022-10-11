import { HStack, VStack, Heading, Text, Button } from "@chakra-ui/react";
import Link from "next/link";

const LaunchBanner: any = ({ data }: any) => {
  let { id, index, success, date, name } = data;
  const color = success ? "green.400" : "red.400";
  return (
    <HStack
      w="full"
      bg="whiteAlpha.400"
      color="whiteAlpha.700"
      px={10}
      py={5}
      rounded="md"
    >
      <VStack align="start" spacing={5}>
        <HStack>
          <Heading size="lg">{index + 1}. Mission:</Heading>
          <Heading size="lg" color={color}>
            {" "}
            {name}
          </Heading>
        </HStack>
        <Text fontSize="xs">Date: {date}</Text>
        <Link href={`/${id}`}>
          <Button size="sm" colorScheme="white" variant="outline">
            Details
          </Button>
        </Link>
      </VStack>
    </HStack>
  );
};

export default LaunchBanner;
