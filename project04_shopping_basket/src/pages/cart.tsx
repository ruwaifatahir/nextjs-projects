import { Heading, Stack } from "@chakra-ui/react";
import { NextPage } from "next";
import { OrderSummary } from "../components";
const CartPage: NextPage = () => {
  return (
    <Stack
      direction={{ base: "column", lg: "row" }}
      justify={{ lg: "space-evenly" }}
      align="start"
      mt={{ base: 6, lg: 12 }}
      spacing={{ base: 14, lg: 32 }}
      px={5}
     
    >
      <Heading size="md" fontWeight="900">
        Shopping Cart (0 items)
      </Heading>
      <OrderSummary />
    </Stack>
  );
};

export default CartPage;
