import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  moviesIds: [],
  tvIds: [],
};

const myListSlice = createSlice({
  name: 'myList',
  initialState,
  reducers: {
    addMovie: (state, action) => {
      state.moviesIds.push(action.payload);
    },
    removeMovie: (state, action) => {
      let index = state.moviesIds.indexOf(action.payload);
      state.moviesIds.splice(index, 1);
    },
    addTv: (state, action) => {
      state.tvIds.push(action.payload);
    },
    removeTv: (state, action) => {
      let index = state.tvIds.indexOf(action.payload);
      state.tvIds.splice(index, 1);
    },
  },
});

export const {addMovie, removeMovie, addTv, removeTv} = myListSlice.actions;

export default myListSlice.reducer;
