import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  results: [],
  query: '',
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
    updateQuery: (state, action) => {
      state.query = action.payload;
      console.log(state.query);
    },
  },
});

export const {addResults, pushToCurrentResults, clearResults, updateQuery} =
  searchResultsSlice.actions;

export default searchResultsSlice.reducer;
