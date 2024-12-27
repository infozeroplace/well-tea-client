import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  totalCost: 0,
};

const calculateTotalCost = (items) => {
  return items.reduce((total, item) => total + item.price * item.quantity, 0);
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { id, name, price, weight, quantity, addOns } = action.payload;
      const existingItem = state.items.find(
        (item) => item.id === id && item.weight === weight
      );
      if (existingItem) {
        existingItem.quantity += quantity;
        existingItem.addOns = [...existingItem.addOns, ...addOns];
      } else {
        state.items.push({ id, name, price, weight, quantity, addOns });
      }
      state.totalCost = calculateTotalCost(state.items);
    },
    removeFromCart: (state, action) => {
      const productId = action.payload;
      state.items = state.items.filter((item) => item.id !== productId);
      state.totalCost = calculateTotalCost(state.items);
    },
    clearCart: (state) => {
      state.items = [];
      state.totalCost = 0;
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
