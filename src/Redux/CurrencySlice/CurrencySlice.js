import { createSlice } from "@reduxjs/toolkit";

export const currencySlice = createSlice({
  name: "currency",
  initialState: "USD",
  reducers: {
    setCurrency: (state, action) => {
      localStorage.setItem("currency", action.payload);
      state = action.payload;
    },
  },
});

export const { setCurrency } = currencySlice.actions;
export default currencySlice.reducer;
