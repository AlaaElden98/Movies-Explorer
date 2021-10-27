import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  query: '',
};

const searchResultsSlice = createSlice({
  name: 'searchResults',
  initialState,
  reducers: {
    updateQuery: (state, action) => {
      state.query = action.payload;
    },
  },
});

export const {updateQuery} = searchResultsSlice.actions;

export default searchResultsSlice.reducer;
