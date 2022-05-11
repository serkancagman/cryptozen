import { createSlice } from "@reduxjs/toolkit";

export const langSlice = createSlice({
  name: "language",
  initialState: localStorage.getItem("language") || "en",
  reducers: {
    setLanguage: (state, action) => {
      localStorage.setItem("language", action.payload);
      return state = action.payload;
    }
  }
});

export const { setLanguage } = langSlice.actions;
export default langSlice.reducer;
