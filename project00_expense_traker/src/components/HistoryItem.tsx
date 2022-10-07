import { HStack, Text, Button } from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux";
import { setSelectedId } from "../redux/features/transactionSlice";

const HistoryItem = ({ children, color, id }: any) => {
  const dispatch = useDispatch();
  return (
    <HStack
      justify="space-between"
      w="full"
      fontWeight={500}
      fontSize="14px"
      shadow="base"
      p={2}
      bg="whiteAlpha.400"
      borderRight="2px"
      borderColor={color}
      onClick={() => dispatch(setSelectedId(id))}
      _hover={{
        bg: "whiteAlpha.900",
      }}
    >
      {children}
      {/* <Text>{name}</Text>
      <Text color={color}>+{amount}</Text>{" "} */}

      {/* <Button
        bg="purple.400"
        size="sm"
        color="white"
        w="full"
        rounded="none"
        onClick={() => dispatch(removeTransaction(id))}
      >
        Remove Transaction
      </Button> */}
    </HStack>
  );
};

export default HistoryItem;
