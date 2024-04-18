import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../store/cartSlice";
import uiSlice from "./uiSlice";
import layoutSlice from "./layoutSlice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    ui: uiSlice.reducer,
    layout: layoutSlice,
    /* layout: layoutSlice.reducer, */
  },
});

export default store;
