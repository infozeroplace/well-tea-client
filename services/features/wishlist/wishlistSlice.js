import { createSlice } from "@reduxjs/toolkit";

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState: {
    wishlist: {},
  },

  reducers: {
    addWishlist: (state, action) => {
        console.log("redux: 11",action.payload);
      state.wishlist = action.payload;
    },
    removeWishlist: (state, action) => {
      state.wishlist = {};
    },
  },
});

export const { addWishlist, removeWishlist } = wishlistSlice.actions;

export default wishlistSlice.reducer;

export const selectCurrentWishlist = (state) => state.wishlist.wishlist;
