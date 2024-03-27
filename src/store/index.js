import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../store/cartSlice";
import uiSlice from "./uiSlice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    ui: uiSlice.reducer,
  },
});

export default store;
