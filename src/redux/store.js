import {configureStore} from '@reduxjs/toolkit';

import myListReducer from './myListSlice';
import searchReducer from './searchSlice';
export default store = configureStore({
  reducer: {
    myList: myListReducer,
    search: searchReducer,
  },
});
