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
          quantity: 1, // Assuming quantity is needed for your use case
        });
        state.totalQuantity += 1;
      }
    },
    removeItemFromFavorites: (state, action) => {
      const titleItemToRemove = action.payload;
      const existingItemIndex = state.items.findIndex(
        (item) => item.titleItem === titleItemToRemove
      );
      if (existingItemIndex !== -1) {
        state.items.splice(existingItemIndex, 1);
        state.totalQuantity -= 1;
      }
    },
  },
});

export const { addItemToFavorites, removeItemFromFavorites } =
  favoritesSlice.actions;
export default favoritesSlice.reducer;
