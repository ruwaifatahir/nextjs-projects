import { Button, Text, VStack, Image } from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../../features/cart/cartSlice";

const Card: any = ({ data }: any) => {
  const {
    id,
    image,
    price,
    rating: { count },
    title,
  } = data;
  const dispatch = useDispatch();
  const handleAddToCart = () => {
    const item = {
      id,
      image,
      price,
      count,
      title,
    };
    dispatch(addToCart(item));
  };
  return (
    <VStack align="center" fontSize="sm" fontWeight={500} spacing={4}>
      <Image
        src={image}
        alt="Dan Abramov"
        boxSize={{ sm: 220, lg: 180 }}
        borderRadius="lg"
      />

      <VStack align="center" spacing={0}>
        {title}
        <Text color="#A0AEC0" fontSize="sm" noOfLines={1}>
          {title}
        </Text>
        <Text>${price}</Text>
      </VStack>
      <Button
        size="sm"
        variant="solid"
        colorScheme="blue"
        w="full"
        onClick={() => {
          handleAddToCart();
        }}
      >
        Add to Cart
      </Button>
    </VStack>
  );
};

export default Card;
