import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  results: [],
};

const searchResultsSlice = createSlice({
  name: 'searchResults',
  initialState,
  reducers: {
    addResults: (state, action) => {
      state.results = action.payload;
    },
    pushToCurrentResults: (state, action) => {
      state.results.push(action.payload);
    },
    clearResults: state => {
      state.results = initialState;
    },
  },
});

export const {addResults, pushToCurrentResults, clearResults} =
  searchResultsSlice.actions;

export default searchResultsSlice.reducer;
