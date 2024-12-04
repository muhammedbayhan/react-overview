import React from "react";
import { useSelector } from "react-redux";

const TodoLeft = () => {
  const todoList = useSelector((state) => state.todoList);

  return (
    <div>
      <h1>TodoLeft</h1>
      <ul>
        {todoList.value.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default TodoLeft;
