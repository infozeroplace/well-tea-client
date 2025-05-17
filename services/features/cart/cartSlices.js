import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "carts",
  initialState: {
    carts: {},
  },

  reducers: {
    addCart: (state, action) => {
      state.carts = action.payload;
    },
    removeCart: (state, action) => {
      state.carts = {
        ...state.carts,
        items: [],
        totalPrice: 0,
        totalQuantity: 0,
      };
    },
  },
});

export const { addCart, removeCart } = cartSlice.actions;

export default cartSlice.reducer;

export const selectCurrentCart = (state) => state.carts.carts;
