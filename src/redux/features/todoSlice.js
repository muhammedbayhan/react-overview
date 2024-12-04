import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [
    { id: 1, title: "Todo 1" },
    { id: 2, title: "Todo 2" },
  ],
};

export const counterSlice = createSlice({
  name: "todoList",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.value.push({ id: Date.now(), title: action.payload });
    },
  },
});

export const { addTodo } = counterSlice.actions;

export default counterSlice.reducer;
