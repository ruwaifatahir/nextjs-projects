//EXTERNAL IMPORTS
import { NextComponentType } from "next";
import {
  Box,
  HStack,
  Text,
  IconButton,
  useColorMode,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";

//INTERNAL IMPORTS
import { DropNav } from "./";
import {
  HamIcon,
  CloseIcon,
  CartIcon,
  MoonIcon,
  BulbIcon,
  GithubIconLight,
} from "../../assets";
import Link from "next/link";

const HamNavbar: NextComponentType = () => {
  const { isOpen, onToggle } = useDisclosure();
  const logoC = useColorModeValue("black", "white");
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box>
      <HStack justify="space-between" px={5} py={2} h={14}>
        <IconButton
          aria-label="Hamburger Icon"
          icon={isOpen ? <CloseIcon /> : <HamIcon />}
          variant="ghost"
          size="sm"
          onClick={onToggle}
        />
        <HStack spacing={1}>
          <IconButton
            aria-label="Search database"
            icon={<CartIcon />}
            variant="ghost"
            size="sm"
            color={logoC}
          />

          <Link href="/">
            <Text color={useColorModeValue("blue.600", "blue.200")}>
              Redux Shopping
            </Text>
          </Link>
        </HStack>
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
          icon={<GithubIconLight />}
          variant="ghost"
          size="md"
        />
      </HStack>
      {isOpen && <DropNav />}
    </Box>
  );
};

export default HamNavbar;
