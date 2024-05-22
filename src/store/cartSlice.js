import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalQuantity: 0,
    totalPrice: 0,
  },
  reducers: {
    addItemToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find(
        (item) => item.itemId === newItem.itemId
      );
      if (!existingItem) {
        state.items.push({
          itemId: newItem.key,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          title:
            newItem.titleArtist ||
            newItem.location ||
            newItem.color ||
            newItem.itemTitle ||
            newItem.itemLevel,
          imgURL: newItem.imgURL,
          productId: newItem.productId,
          priceItem: newItem.priceItem,
          titleItem: newItem.titleItem,
          selectedVersion: newItem.selectedVersion,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice += newItem.price;
      }
      state.totalQuantity++;
    },
    removeItemFromCart(state, action) {
      const itemIdToRemove = action.payload;
      const existingItem = state.items.find(
        (item) => item.itemId === itemIdToRemove
      );
      if (!existingItem) {
        return;
      }
      if (existingItem.quantity === 1) {
        state.items = state.items.filter(
          (item) => item.itemId !== itemIdToRemove
        );
      } else {
        existingItem.quantity--;
        existingItem.totalPrice -= existingItem.price;
      }
      state.totalQuantity--;
    },
  },
});

export const { addItemToCart, removeItemFromCart } = cartSlice.actions;
export default cartSlice.reducer;
