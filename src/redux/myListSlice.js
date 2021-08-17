import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  items: [],
};

const myListSlice = createSlice({
  name: 'myList',
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
      console.log(state);
    },
    removeItem: (state, action) => {
      let index = state.items.findIndex(item => item.id === action.payload);
      state.items.splice(index, 1);
      console.log(state);
    },
  },
});

export const {addItem, removeItem} = myListSlice.actions;

export default myListSlice.reducer;
