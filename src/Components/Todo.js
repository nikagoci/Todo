import React from "react";

import Container from "../UI/Container/Container";

import TodoList from "./TodoList";

const Todo = () => {
  return (
    <Container className="todo-container">
      <div className="todo-wrap">
        <ul>
            <TodoList />
        </ul>
      </div>
    </Container>
  );
};

export default Todo;
