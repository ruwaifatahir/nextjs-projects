import { Button, HStack, Text } from "@chakra-ui/react";

const TodoItem: any = ({ name, id, deleteTodoItem, editTodoItem }: any) => {
  return (
    <HStack justify="space-between" w="full">
      <Text color="blue.300" fontSize="lg" fontWeight="500 ">
        {name}
      </Text>
      <HStack spacing={2}>
        <Button
          variant="outline"
          size="xs"
          color="blue.300"
          onClick={() => {
            editTodoItem(id);
          }}
        >
          Edit
        </Button>
        <Button
          variant="outline"
          size="xs"
          color="red.300"
          onClick={() => {
            deleteTodoItem(id);
          }}
        >
          Del
        </Button>
      </HStack>
    </HStack>
  );
};

export default TodoItem;
