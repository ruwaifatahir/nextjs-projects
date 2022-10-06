import { configureStore } from "@reduxjs/toolkit";
import { cartReducer, productReducer } from "../features";
export default configureStore({
  reducer: {
    cart: cartReducer,
    product: productReducer,
  },
});
