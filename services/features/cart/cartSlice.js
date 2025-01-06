import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  totalQuantity: 0,
  totalCost: 0,
};

const calculateTotalCost = (items) => {
  return items.reduce(
    (total, item) => total + item.productPrice * item.quantity,
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
      const {
        product,
        unitObj,
        purchaseType,
        subObj,
        quantity,
        productPrice,
        addOns,
      } = action.payload;
      const existingItem = state.items.find(
        (item) => item.product._id === product._id && item.unitObj.unit === unitObj.unit && item.purchaseType === purchaseType
      );

      if (existingItem) {
        existingItem.quantity += quantity;
        existingItem.addOns = [...existingItem.addOns, ...addOns];
        existingItem.itemTotal =
          existingItem.quantity * existingItem.productPrice;
      } else {
        state.items.push({
          product,
          unitObj,
          purchaseType,
          subObj,
          quantity,
          productPrice,
          addOns,
          itemTotal: quantity * productPrice,
        });
      }
      state.totalCost = calculateTotalCost(state.items);
      state.totalQuantity = calculateTotalQuantity(state.items);
    },
    updateQuantity: (state, action) => {
      const { productId, unit, quantity, purchaseType } = action.payload;
      const existingItem = state.items.find(
        (item) =>
          item.product._id === productId &&
          item.unitObj.unit === unit &&
          item.purchaseType === purchaseType
      );

      if (existingItem) {
        existingItem.quantity = quantity;
        existingItem.itemTotal = quantity * existingItem.productPrice;
      }
      state.totalCost = calculateTotalCost(state.items);
      state.totalQuantity = calculateTotalQuantity(state.items);
    },
    removeFromCart: (state, action) => {
      const { productId, unit, purchaseType } = action.payload;
      state.items = state.items.filter(
        (item) =>
          !(
            item.product._id === productId &&
            item.unitObj.unit === unit &&
            item.purchaseType === purchaseType
          )
      );
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
