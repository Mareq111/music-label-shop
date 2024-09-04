import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../store/cartSlice";
import uiSlice from "./uiSlice";
import layoutSlice from "./layoutSlice";
import formReducer from "./formSlice";
import favoritesReducer from "./favoritesSlice";
import userProfileSlice from "./userProfileSlice";
import authReducer from "./authSlice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    ui: uiSlice.reducer,
    layout: layoutSlice,
    form: formReducer,
    favorites: favoritesReducer,
    userProfile: userProfileSlice,
    auth: authReducer,
  },
});

export default store;
