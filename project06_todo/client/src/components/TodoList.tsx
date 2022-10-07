import { Divider, Heading, VStack } from "@chakra-ui/react";

import { TodoItem } from "./";
const TodoList: any = ({ todos, deleteTodoItem, editTodoItem }: any) => {
  return (
    <VStack w="full" spacing={5}>
      <Heading size="lg" color="blue.400"> Todos</Heading>
      <Divider />

      <VStack spacing={4} w="full">
        {todos.map(({ attributes: { name }, id }: any, index: number) => (
          <TodoItem
            name={name}
            id={id}
            deleteTodoItem={deleteTodoItem}
            editTodoItem={editTodoItem}
            key={index}
          />
        ))}
      </VStack>
    </VStack>
  );
};

export default TodoList;
