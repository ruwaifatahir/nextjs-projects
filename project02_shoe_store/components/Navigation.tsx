import { HStack, Icon, IconButton, Text } from "@chakra-ui/react";
import { ChevronLeft, CartIcon, PinIcon } from "../assets";
const Navigation = () => {
  return (
    <HStack
      justify="space-between"
      w="full"
      px={10}
      py={1}
      color="gray.600"
      fontSize="11px"
    >
      <HStack spacing={0}>
        <IconButton
          aria-label="chevron"
          variant="ghost"
          icon={<ChevronLeft />}
          size="xs"
          p={1}
        />
        <Text>Visit Nike.com</Text>
      </HStack>
      <HStack>
        <Text>Join/Login</Text>
        <Text>Help</Text>
        <IconButton
          aria-label="cart"
          variant="ghost"
          icon={<CartIcon />}
          size="xs"
          p={1}
        />
        <IconButton
          aria-label="pin"
          variant="ghost"
          icon={<PinIcon />}
          size="xs"
          p={1}
        />
        <Text>Canada</Text>
      </HStack>
    </HStack>
  );
};

export default Navigation;
