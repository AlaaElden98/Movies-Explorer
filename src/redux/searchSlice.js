import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  query: '',
  trendingSearches: [],
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    updateQuery: (state, action) => {
      state.query = action.payload;
    },
    updateTrendingSearches: (state, action) => {
      state.trendingSearches = action.payload;
    },
  },
});

export const {updateQuery, updateTrendingSearches} = searchSlice.actions;

export default searchSlice.reducer;
