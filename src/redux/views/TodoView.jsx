import React, { useState } from "react";
import TodoRight from "../components/TodoRight";
import TodoLeft from "../components/TodoLeft";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todoSlice";

const TodoView = () => {
  const dispatch = useDispatch();
  const [first, setfirst] = useState("");

  return (
    <div>
      <div className="grid grid-cols-2">
        <TodoRight />
        <TodoLeft />
      </div>
      <div className="border-2 p-4 m-4 flex flex-col">
        <input
          onChange={(e) => setfirst(e.target.value)}
          type="text"
          placeholder="TODO..."
        />
        <button onClick={() => dispatch(addTodo(first))}>Click me</button>
      </div>
    </div>
  );
};

export default TodoView;
