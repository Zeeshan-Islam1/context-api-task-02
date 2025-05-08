import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: JSON.parse(localStorage.getItem('cartItems')) || [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.items.find(item => item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
      localStorage.setItem('cartItems', JSON.stringify(state.items)); // Save to localStorage
    },
    deleteFromCart: (state, action) => {
        state.items = state.items.filter(item => item.id !== action.payload);
      },
      totalSum: (state) => {
        const total = state.items.reduce((acc, item) => acc + item.quantity * parseFloat(item.price.replace(/[₹,]/g, '')), 0);
        return total.toFixed(2);
      },
    removeFromCart: (state, action) => {
      const itemId = action.payload;
      const existingItem = state.items.find(item => item.id === itemId);
      
      if (existingItem) {
        if (existingItem.quantity > 1) {
          existingItem.quantity -= 1;
        } else {
          state.items = state.items.filter(item => item.id !== itemId);
        }
      }
      localStorage.setItem('cartItems', JSON.stringify(state.items)); 
    },

  },
});

export const { addToCart, removeFromCart, deleteFromCart } = cartSlice.actions;
export default cartSlice.reducer;
