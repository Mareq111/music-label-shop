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
      const newItem = action.payload;
      const existingItem = state.items.find(
        (item) => item.titleItem === newItem.titleItem
      );
      if (!existingItem) {
        state.items.push({
          ...newItem,
          itemId: newItem.itemId,
          quantity: 1,
        });
        state.totalQuantity += 1;
      }
    },
    removeItemFromFavorites: (state, action) => {
      const itemIdToRemove = action.payload;
      const existingItem = state.items.find(
        (item) => item.itemId === itemIdToRemove
      );
      if (!existingItem) return;

      state.items = state.items.filter(
        (item) => item.itemId !== itemIdToRemove
      );
      state.totalQuantity -= 1;
    },
  },
});

export const { addItemToFavorites, removeItemFromFavorites } =
  favoritesSlice.actions;
export default favoritesSlice.reducer;
