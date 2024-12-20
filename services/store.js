import { api } from "@/services/api/apiSlice";
import authReducer from "@/services/features/auth/authSlice";
import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "@/services/features/category/categorySlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    [api.reducerPath]: api.reducer,
    category: categoryReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export default store;
