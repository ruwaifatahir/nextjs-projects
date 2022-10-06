import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
  },
  reducers: {
    fillStore: (state, action) => {
      state.products = action.payload;
    },
  },
});

export const { fillStore } = cartSlice.actions;

export default cartSlice.reducer;


