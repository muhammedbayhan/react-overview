import React from "react";
import { useSelector } from "react-redux";

const TodoRight = () => {
  const todoList = useSelector((state) => state.todoList);
  return (
    <div>
      <h1>TodoRight</h1>
      <ul>
        {todoList.value.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default TodoRight;
