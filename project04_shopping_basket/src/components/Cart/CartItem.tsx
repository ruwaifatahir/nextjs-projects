import { Heading, Hide, HStack } from "@chakra-ui/react";
import { NextComponentType } from "next";
import { Text, VStack, Image, IconButton } from "@chakra-ui/react";
import { CloseIcon } from "../../assets";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../../features/cart/cartSlice";
import { basename } from "path";
const CartItem: any = ({ data }: any) => {
  const { id, image, price, count, title } = data;

  const dispatch = useDispatch();

  console.log(id);
  const remove = () => {
    dispatch(removeFromCart(id));
  };
  return (
    <HStack justify="space-between" spacing={32} w="full">
      <HStack spacing={8} w="full">
        <Image
          src={image}
          alt={title}
          boxSize={{ sm: 20, lg: 28 }}
          borderRadius="lg"
        />
        <VStack align="start" w="full" spacing={{ base: 3, lg: 2 }}>
          <Heading size="sm" noOfLines={1}>
            {title}
          </Heading>
          <HStack
            justify="space-between"
            w={{ lg: "65%" }}
            fontSize="xs"
            color="gray.400"
          >
            <Hide below="md">
              <Text>{count} Reviews</Text>
            </Hide>
            <Text fontWeight={700}>${price}</Text>
          </HStack>
          <Text fontSize="small" color="gray.400" noOfLines={1}>
            Add Gift wrapping
          </Text>
        </VStack>
      </HStack>
      <IconButton
        aria-label="Hamburger Icon"
        icon={<CloseIcon />}
        variant="ghost"
        size="sm"
        onClick={() => {
          remove();
        }}
      />
    </HStack>
  );
};

export default CartItem;
