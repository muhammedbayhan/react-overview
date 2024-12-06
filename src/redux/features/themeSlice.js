import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mode: false,
  text: "Green Mode",
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.mode = !state.mode;
      state.text = state.mode ? "Red Mode" : "Green Mode";
    },
  },
});

export const { toggleTheme } = themeSlice.actions;

export default themeSlice.reducer;
