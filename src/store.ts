import { configureStore } from "@reduxjs/toolkit";
import cart from "./Cart/cart.slice";
import products from "./Products/products.slice";

const store = configureStore({
  reducer: {
    products,
    cart,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
