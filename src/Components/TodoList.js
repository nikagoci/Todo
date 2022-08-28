import React, { useContext } from "react";

import Card from "../UI/Card/Card";
import { TodoContext } from "../Context/TodoContext";

import { IoMdRemoveCircleOutline } from "react-icons/io";

const TodoList = () => {
  const TodoCtx = useContext(TodoContext);

  return (
    TodoCtx.inputValue.length > 0 &&
    TodoCtx.inputValue.map((item) => (
      <li key={item.id}>
        <Card className="todo-card">
          <h2>{item.name}</h2>
          <div className="icon-keeper">
            <IoMdRemoveCircleOutline onClick={() => TodoCtx.removeItem(item.id)} className="icon" />
          </div>
        </Card>
      </li>
    ))
  );
};

export default TodoList;
