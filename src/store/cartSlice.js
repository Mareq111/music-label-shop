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
          ...newItem,
          quantity: 1,
          itemId: newItem.key,
          totalPrice: newItem.priceItem,
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
        state.totalQuantity += 1;
        state.totalPrice += newItem.priceItem;
      } else {
        existingItem.quantity++;
        existingItem.totalPrice += newItem.priceItem;
        state.totalQuantity += 1;
        state.totalPrice += newItem.priceItem;
      }
    },
    removeItemFromCart(state, action) {
      const itemIdToRemove = action.payload;
      const existingItem = state.items.find(
        (item) => item.itemId === itemIdToRemove
      );
      if (!existingItem) return;

      state.totalQuantity -= existingItem.quantity;
      state.totalPrice -= existingItem.totalPrice;

      state.items = state.items.filter(
        (item) => item.itemId !== itemIdToRemove
      );
    },
    updateItemQuantity(state, action) {
      const { itemId, quantity } = action.payload;
      const existingItem = state.items.find((item) => item.itemId === itemId);
      if (existingItem) {
        const quantityDifference = quantity - existingItem.quantity;
        existingItem.quantity = quantity;
        existingItem.totalPrice = existingItem.priceItem * quantity;
        state.totalQuantity += quantityDifference;
        state.totalPrice += quantityDifference * existingItem.priceItem;
      }
    },
    clearCart(state) {
      state.items = [];
      state.totalQuantity = 0;
      state.totalPrice = 0;
    },
  },
});

export const {
  addItemToCart,
  removeItemFromCart,
  updateItemQuantity,
  clearCart,
} = cartSlice.actions;
export default cartSlice.reducer;
