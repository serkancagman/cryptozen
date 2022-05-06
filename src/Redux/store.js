import { configureStore } from "@reduxjs/toolkit";
import currencyReducer from "./CurrencySlice/CurrencySlice";
import coinReducer from "./CoinSlice/CoinSlice";
export const store = configureStore({
  reducer: {
    currency: currencyReducer,
    current_coin: coinReducer,
  },
});
