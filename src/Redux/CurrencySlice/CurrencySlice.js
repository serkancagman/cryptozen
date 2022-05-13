import { createSlice } from "@reduxjs/toolkit";

const getLocalCurrency = () => {
  const currency = JSON.parse(localStorage.getItem("currency"));
  return currency ? currency.type : "USD";
};

const getLocalIcon = () => {
  const icon = JSON.parse(localStorage.getItem("currency"));
  return icon ? icon.icon : "$";
};

export const currencySlice = createSlice({
  name: "currency",
  initialState: {
    currency: getLocalCurrency(),
    currencyIcon: getLocalIcon(),
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
