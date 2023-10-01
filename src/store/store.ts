import registerUserSlice from "@/pages/auth/store/registerUserSlice";
import addCartSlice from "@/pages/cart/store/addCartSlice";
import addWishlistSlice from "@/pages/wishlist/store/addWishlistSlice";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["addCartSlice", "addWishlistSlice"],
};

const rootReducer = combineReducers({
  registerUser: registerUserSlice,
  addCartSlice: addCartSlice,
  addWishlistSlice: addWishlistSlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== "production",
});

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
