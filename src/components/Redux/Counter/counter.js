import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 0
};

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      if (state.value > 0) state.value -= 1;
    },
    multiply: (state, action) => {
      state.value *= 2;
    },
    deleteAll: (state, action) => {
      state.value = 0;
    },
  },
});

export const { increment, decrement, multiply, deleteAll } = counterSlice.actions;

export default counterSlice.reducer;
