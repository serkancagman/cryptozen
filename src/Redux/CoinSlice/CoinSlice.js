import { createSlice } from "@reduxjs/toolkit";

const coinSlice = createSlice({
  name: "current_coin",
  initialState: {
    coin: "BTC",
    coin_price: 0,
  },
  reducers: {
    setCurrentCoin: (state, action) => {
      const { market_data, symbol } = action.payload;
      state.coin = symbol;
      state.coin_price = market_data.current_price.usd;
    },
  },
});

export default coinSlice.reducer;
export const { setCurrentCoin } = coinSlice.actions;
