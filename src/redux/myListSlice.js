import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  movies: [],
  tv: [],
};

const myListSlice = createSlice({
  name: 'myList',
  initialState,
  reducers: {
    addMovie: (state, action) => {
      state.movies.push(action.payload);
    },
    removeMovie: (state, action) => {
      let index = state.movies.findIndex(item => item.id === action.payload);
      state.movies.splice(index, 1);
    },
    addTv: (state, action) => {
      state.tv.push(action.payload);
    },
    removeTv: (state, action) => {
      let index = state.tv.findIndex(item => item.id === action.payload);
      state.tv.splice(index, 1);
    },
  },
});

export const {addMovie, removeMovie, addTv, removeTv} = myListSlice.actions;

export default myListSlice.reducer;
