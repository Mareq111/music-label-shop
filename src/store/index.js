/* import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../store/cartSlice";
import uiSlice from "./uiSlice";
import layoutSlice from "./layoutSlice";
import formReducer from './formSlice';


const store = configureStore({
  reducer: {
    cart: cartReducer,
    ui: uiSlice.reducer,
    layout: layoutSlice,
    form: formReducer,
  
  },
});

export default store; */


import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../store/cartSlice";
import uiSlice from "./uiSlice";
import layoutSlice from "./layoutSlice";
import formReducer from './formSlice';
import favoritesReducer from './favoritesSlice'; 

const store = configureStore({
  reducer: {
    cart: cartReducer,
    ui: uiSlice.reducer,
    layout: layoutSlice,
    form: formReducer,
    favorites: favoritesReducer, 
  },
});

export default store;
