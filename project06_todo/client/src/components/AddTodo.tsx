import { Button, HStack, Input } from "@chakra-ui/react";
import { useState } from "react";

const AddTodo: any = ({ addTodo }: any) => {
  const [todoText, setTodoText] = useState("");
  return (
    <HStack>
      <Input
        placeholder="Add new todo here"
        type="text"
        size="sm"
        id="todoText"
        value={todoText}
        onChange={(e) => setTodoText(e.target.value)}
      />
      <Button
        variant="outline"
        size="sm"
        color="blue.500"
        px={10}
        onClick={() => {
          addTodo(todoText);
        }}
      >
        Add Todo
      </Button>
    </HStack>
  );
};

export default AddTodo;
