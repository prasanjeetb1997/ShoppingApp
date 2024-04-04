import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  products: [],
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {


    addItem(state, action) {
      const itemId = action.payload._id;

      // Add a new item to the array if it's not already present
      if (state.products.length === 0 || !state.products.some(product => product._id === itemId)) {

        state.products.push(action.payload);
      }
    },

    removeItem(state, action) {
      // Remove an item from the array
      state.products = state.products.filter(product => product._id !== action.payload);
    },

    clearArray(state) {
      // Clear the array
      state.products = [];
    }
  },
})

// Action creators are generated for each case reducer function
export const { addItem, removeItem, clearArray } = cartSlice.actions

export default cartSlice.reducer