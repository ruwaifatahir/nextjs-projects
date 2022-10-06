import { Heading, Stack, VStack, Box } from "@chakra-ui/react";
import { NextPage } from "next";
import { OrderSummary, CartItem, Footer } from "../components";
import { useSelector, useDispatch } from "react-redux";

const CartPage: NextPage = () => {
  const { cartItems: cart, itemCount } = useSelector(
    (state: any) => state.cart
  );
  return (
    <Stack
      direction={{ base: "column", lg: "row" }}
      justify={{ lg: "space-evenly" }}
      align="start"
      mt={{ base: 6, lg: 12 }}
      spacing={{ base: 14, lg: 32 }}
      px={5}
    >
      <VStack align="start" spacing={10} w={{ lg: "40%" }}>
        <Heading size="md" fontWeight="900">
          Shopping Cart ({itemCount} items)
        </Heading>

        {cart.map(({ id, image, price, count, title }: any, ind: any) => (
          <Box
            data={{ id: ind, image, price, count, title }}
            as={CartItem}
            key={ind}
          />
        ))}
      </VStack>

      <OrderSummary />
    </Stack>
  );
};

export default CartPage;
