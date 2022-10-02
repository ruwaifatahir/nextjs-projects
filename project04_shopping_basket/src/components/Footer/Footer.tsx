import { NextComponentType } from "next";
import {
  Button,
  HStack,
  Text,
  IconButton,
  Icon,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";

import {
  CartIcon,
  BulbIcon,
  MoonIcon,
  GithubIconLight,
  GithubIconDark,
} from "../../assets";
const Navbar: NextComponentType = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <HStack spacing={4}>
      <IconButton
        aria-label="Search database"
        icon={<GithubIconLight />}
        variant="ghost"
        size="xs"
      />
      <IconButton
        aria-label="Search database"
        icon={<BulbIcon />}
        variant="ghost"
        size="xs"
        color="black"
      />
      <IconButton
        aria-label="Search database"
        icon={<CartIcon />}
        variant="ghost"
        size="xs"
        color="black"
      />
      <Text fontSize="xs">
        Made with Next.js, Redux Toolkit, Chakra UI, and ❤️
      </Text>
    </HStack>
  );
};

export default Navbar;
