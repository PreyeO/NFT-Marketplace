import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../Layouts/Cart/CartSlice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    // ... other reducers
  },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
