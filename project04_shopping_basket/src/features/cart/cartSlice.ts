import { createSlice } from "@reduxjs/toolkit";

interface CartItem {
  id: number;
  name: string;
  review: string;
  price: number;
  image: string;
}
export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [] as CartItem[],
    itemCount: 0,
  },
  reducers: {
    addToCart: (state, action) => {
      state.cartItems.push(action.payload);
      state.itemCount++;
    },
    removeFromCart: (state, action) => {
      state.cartItems.splice(action.payload, 1);
      state.itemCount--;  
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
