import { Divider, VStack, Center, Text, HStack, Show } from "@chakra-ui/react";

const Header = () => {
  return (
    <VStack w="full">
      <Divider />
      <HStack w="full" justify={{base:"center", lg: "start"}}>
        <HStack
          maxW="60%"
          w="full"
          justify={{ base: "center", lg: "space-between" }}
          px={10}
          py={1}
        >
          <Text fontWeight={900} color="red" fontSize="lg">
            SNKRS
          </Text>

          <Show above="lg">
            <HStack
              fontWeight={600}
              fontSize={{ base: "sm", lg: "lg" }}
              spacing={8}
            >
              <Text>FEED</Text>
              <Text noOfLines={1}>IN STOCK</Text>
              <Text>UPCOMING</Text>
            </HStack>
          </Show>
        </HStack>
      </HStack>
      <Divider w="full" />
    </VStack>
  );
};

export default Header;
