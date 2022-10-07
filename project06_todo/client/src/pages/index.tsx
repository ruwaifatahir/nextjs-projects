import { Box, Button, HStack, VStack } from "@chakra-ui/react";
import type { NextPage } from "next";
import { useEffect, useState } from "react";
import axios from "axios";
import { Header, AddTodo, TodoList } from "../components";

const BASE_URL = "http://localhost:1337/api/todos/";

const Home: NextPage = () => {
  const [todos, setTodos]: any = useState([]);
  useEffect(() => {
    const init = async () => {
      const {
        data: { data },
      } = await axios.get(BASE_URL);
      setTodos(data);
    };

    init();
  }, []);

  console.log(todos);

  const addTodo = async (todoText: string) => {
    const sData = {
      data: {
        name: todoText,
      },
    };
    if (todoText && todoText.length > 0) {
      const {
        data: { data },
      } = await axios.post(BASE_URL, sData);
      setTodos([...todos, data]);
    }
  };

  const deleteTodoItem = async (todoId: any) => {
    await axios.delete(BASE_URL + todoId);
    const newTodos = todos.filter((_todo: any) => _todo.id !== todoId);
    setTodos(newTodos);
  };

  const editTodoItem = async (todoId: any) => {
    const newTodoText = prompt("Enter new todo text or description:");
    const sData = {
      data: {
        name: newTodoText,
      },
    };
    if (newTodoText != null) {
      const {
        data: { data },
      } = await axios.put(BASE_URL + todoId, sData);

      const moddedTodos = todos.map((_todo: any) => {
        if (_todo.id === todoId) {
          return data;
        } else {
          return _todo;
        }
      });
      setTodos(moddedTodos);
    }
  };

  return (
    <HStack justify="center">
      <VStack mt={14} spacing={10} boxShadow="2xl" p={10}>
        <Header />
        <AddTodo addTodo={addTodo} />
        <TodoList
          todos={todos}
          deleteTodoItem={deleteTodoItem}
          editTodoItem={editTodoItem}
        />
      </VStack>
    </HStack>
  );
};

export default Home;
