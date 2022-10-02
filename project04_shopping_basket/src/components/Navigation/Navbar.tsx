//EXTERNAL IMPORTS
import { NextComponentType } from "next";
import {
  Box,
  Button,
  HStack,
  Text,
  IconButton,
  useColorMode,
  useColorModeValue,
  Show,
} from "@chakra-ui/react";

//INTERNAL IMPORTS
import {
  CartIcon,
  BulbIcon,
  MoonIcon,
  GithubIconLight,
  GithubIconDark,
} from "../../assets";

const Navbar: NextComponentType = () => {
  /**
   * Tasks:
   * Make navbar blured when the user is not on the top of the page: DONE
   * Make navbar responsive:
   */

  //HOOKS
  const { colorMode, toggleColorMode } = useColorMode();
  //VARS
  const logoC = useColorModeValue("black", "white");
  const logoTextC = useColorModeValue("blue.600", "blue.200");

  //STATE

  return (
    <HStack justify="space-between" boxShadow="sm" px={12} py={0} h={14}>
      <HStack spacing={12}>
        <HStack spacing={1}>
          <IconButton
            aria-label="Search database"
            icon={<CartIcon />}
            variant="ghost"
            size="xs"
            color={logoC}
          />
          <Text color={logoTextC}>Redux Shopping</Text>
        </HStack>
        <Text fontSize={12}>Products</Text>
        <Text fontSize={12}>Cart</Text>
      </HStack>

      <HStack spacing={4}>
        <Button
          color={logoTextC}
          colorScheme={logoTextC}
          variant="outline"
          size="xs"
          px={6}
          py={4}
        >
          Items In Cart: 0
        </Button>
        <IconButton
          aria-label="Search database"
          icon={colorMode == "light" ? <MoonIcon /> : <BulbIcon />}
          variant="ghost"
          size="md"
          p={3}
          color={logoC}
          onClick={toggleColorMode}
        />
        <IconButton
          aria-label="Search database"
          icon={colorMode == "light" ? <GithubIconLight /> : <GithubIconDark />}
          variant="ghost"
          size="md"
        />
      </HStack>
    </HStack>
  );
};

export default Navbar;
