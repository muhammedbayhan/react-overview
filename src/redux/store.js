import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counterSlice";
import todoListReducer from "./features/todoSlice";
import themeReducer from "./features/themeSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    todoList: todoListReducer,
    theme: themeReducer,
  },
});
