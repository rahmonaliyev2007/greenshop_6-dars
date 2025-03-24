import { configureStore } from "@reduxjs/toolkit";
import { postApi } from "./Rtk";
import cartReducer from "./slices/cartSlice";
import likedReducer from "./slices/likedSlice";

export const store = configureStore({
  reducer: {
    [postApi.reducerPath]: postApi.reducer,
    cart: cartReducer,
    liked: likedReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(postApi.middleware),
});
