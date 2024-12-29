import { api } from "@/services/api/apiSlice";
import authReducer from "@/services/features/auth/authSlice";
import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "@/services/features/category/categorySlice";
import cartReducer from "@/services/features/cart/cartSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    category: categoryReducer,
    [api.reducerPath]: api.reducer,
    cart: cartReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export default store;
