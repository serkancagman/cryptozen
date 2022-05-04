import { createSlice } from "@reduxjs/toolkit";

export const currencySlice = createSlice({
  name: "currency",
  initialState: {
    currency: "USD",
    currencyIcon: "$",
  },
  reducers: {
    setCurrency: (state, action) => {
      localStorage.setItem("currency", JSON.stringify(action.payload));
      const { type, icon } = action.payload;
      state.currency = type;
      state.currencyIcon = icon;
    },
  },
});

export const { setCurrency } = currencySlice.actions;
export default currencySlice.reducer;
