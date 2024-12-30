import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  totalQuantity: 0,
  totalCost: 0,
};

const calculateTotalCost = (items) => {
  return items.reduce(
    (total, item) => total + item.product.price * item.quantity,
    0
  );
};


const calculateTotalQuantity = (items) => {
  return items.reduce((total, item) => total + item.quantity, 0);
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { product, weight, quantity, addOns } = action.payload;
      const existingItem = state.items.find(
        (item) => item.product.id === product.id && item.weight === weight
      );

      if (existingItem) {
        existingItem.quantity += quantity;
        existingItem.addOns = [...existingItem.addOns, ...addOns];
        existingItem.itemTotal =
          existingItem.quantity * existingItem.product.price;
      } else {
        state.items.push({
          product,
          weight,
          quantity,
          addOns,
          itemTotal: quantity * product.price,
        });
      }
      state.totalCost = calculateTotalCost(state.items);
      state.totalQuantity = calculateTotalQuantity(state.items);
    },
    updateQuantity: (state, action) => {
      const { productId, weight, quantity } = action.payload;
      const existingItem = state.items.find(
        (item) => item.product.id === productId && item.weight === weight
      );

      if (existingItem) {
        existingItem.quantity = quantity;
        existingItem.itemTotal = quantity * existingItem.product.price;
      }
      state.totalCost = calculateTotalCost(state.items);
      state.totalQuantity = calculateTotalQuantity(state.items);
    },
    removeFromCart: (state, action) => {
      const { productId, weight } = action.payload;
      state.items = state.items.filter((item) => !(item.product.id === productId && item.weight === weight));
      state.totalCost = calculateTotalCost(state.items);
      state.totalQuantity = calculateTotalQuantity(state.items);
    },
    clearCart: (state) => {
      state.items = [];
      state.totalCost = 0;
      state.totalQuantity = 0;
    },
  },
});

export const { addToCart, updateQuantity, removeFromCart, clearCart } =
  cartSlice.actions;
export default cartSlice.reducer;
