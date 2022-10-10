import { Divider, HStack, Text, VStack } from "@chakra-ui/react";

const Footer = () => {
  return (
    <VStack mt={{ base: 5, lg: 12 }}>
      <Divider />
      <HStack justify="center" p={{ base: 3, lg: 20 }}>
        <Text fontSize={{ base: "md", lg: "3xl" }} fontWeight={500}>
          Built with ChakraUI, NextJS, Strapi and ❤️
        </Text>
      </HStack>
    </VStack>
  );
};
export default Footer;
