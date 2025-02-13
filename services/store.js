import { api } from "@/services/api/apiSlice";
import authReducer from "@/services/features/auth/authSlice";
import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "@/services/features/category/categorySlice";
import cartReducer from "@/services/features/cart/cartSlice";
import wishlistReducer from "@/services/features/wishlist/wishlistSlice";
import cartSlices from "@/services/features/cart/cartSlices";

const store = configureStore({
  reducer: {
    auth: authReducer,
    category: categoryReducer,
    cart: cartReducer,
    wishlist: wishlistReducer,
    carts: cartSlices,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export default store;
