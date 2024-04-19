import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./features/counter/cartSlice";

export const store = configureStore({
  reducer: rootReducer,
});
