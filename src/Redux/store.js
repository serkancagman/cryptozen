import { configureStore } from "@reduxjs/toolkit";
import currencyReducer from "./CurrencySlice/CurrencySlice";
export const store = configureStore({
  reducer: {
    currency: currencyReducer,
  },
});
