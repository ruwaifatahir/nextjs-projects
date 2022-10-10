import { Divider, Heading, HStack, VStack } from "@chakra-ui/react";
import Link from "next/link";

const Header = () => {
  return (
    <HStack justify="center">
      <Link href="/">
        <Heading as="h1" size="xl" py={8}>
          RUWAIFA BLOG
        </Heading>
      </Link>
    </HStack>
  );
};

export default Header;
