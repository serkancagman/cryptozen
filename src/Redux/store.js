import { configureStore } from "@reduxjs/toolkit";
import currencyReducer from "./CurrencySlice/CurrencySlice";
import coinReducer from "./CoinSlice/CoinSlice";
import langReducer from "./LangSlice/LangSlice";
export const store = configureStore({
  reducer: {
    currency: currencyReducer,
    current_coin: coinReducer,
    language: langReducer,
  },
});
