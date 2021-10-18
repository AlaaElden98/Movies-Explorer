import {configureStore} from '@reduxjs/toolkit';

import myListReducer from './myListSlice';
import searchResultsReducer from './searchResultsSlice';
export default store = configureStore({
  reducer: {
    myList: myListReducer,
    searchResults: searchResultsReducer,
  },
});
