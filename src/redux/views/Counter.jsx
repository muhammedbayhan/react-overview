import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../features/counterSlice";

const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      {count}

      <div className="flex">
        <div className="bg-green-600 p-2" onClick={() => dispatch(increment())}>
          +
        </div>
        <div className="bg-red-600 p-2" onClick={() => dispatch(decrement())}>
          -
        </div>
      </div>
    </div>
  );
};

export default Counter;
