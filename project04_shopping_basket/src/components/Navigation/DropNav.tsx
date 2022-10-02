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
  useDisclosure,
} from "@chakra-ui/react";

const DropNav: NextComponentType = () => {
  const { isOpen, onToggle } = useDisclosure();
  const logoC = useColorModeValue("black", "white");
  const { colorMode, toggleColorMode } = useColorMode();

  return (
   <Box></Box>
  );
};

export default DropNav;
