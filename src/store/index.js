// store/index.js
import { configureStore } from '@reduxjs/toolkit'
import { productsApi } from './productsApi'
import cartReducer from './cartSlice'

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    [productsApi.reducerPath]: productsApi.reducer, // Tambahkan API reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
      immutableCheck: false,
    }).concat(productsApi.middleware),
  devTools: process.env.NODE_ENV !== 'production',
})