import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  results: [],
  query: '',
  totalPages: 0,
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
    setTotalPage: (state, action) => {
      state.totalPages = action.payload;
    },
  },
});

export const {
  addResults,
  pushToCurrentResults,
  clearResults,
  updateQuery,
  setTotalPage,
} = searchResultsSlice.actions;

export default searchResultsSlice.reducer;
