import { Divider, Heading, HStack, VStack } from "@chakra-ui/react";

const Header = () => {
  return (
    <HStack justify="center">
      <Heading as="h1" size="xl" py={8}>
        RUWAIFA BLOG
      </Heading>
    </HStack>
  );
};

export default Header;
