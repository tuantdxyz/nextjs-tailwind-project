// store.ts
import { configureStore } from '@reduxjs/toolkit';
import productReducer  from './features/cart/productSlice';

const store = configureStore({
  reducer: {
    // cart: cardReducer,
    cart: productReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
