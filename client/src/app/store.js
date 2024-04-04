import { configureStore } from '@reduxjs/toolkit'
import cartReducer from '../pages/Cart/cartSlice'
import cartTotalReducer from '../pages/Cart/cartTotal'

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    cartTotal: cartTotalReducer
  },
})