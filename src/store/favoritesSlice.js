import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  totalQuantity: 0,
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addItemToFavorites: (state, action) => {
      state.items.push(action.payload);
      state.totalQuantity += 1;
    },
    removeItemFromFavorites: (state, action) => {
      state.items = state.items.filter(
        (item) => item.itemId !== action.payload
      );
      state.totalQuantity -= 1;
    },
  },
});

export const { addItemToFavorites, removeItemFromFavorites } =
  favoritesSlice.actions;
export default favoritesSlice.reducer;
