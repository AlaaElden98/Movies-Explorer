import {configureStore} from '@reduxjs/toolkit';

import myListReducer from './myListSlice';
import searchReducer from './searchSlice';

const store = configureStore({
  reducer: {
    myList: myListReducer,
    search: searchReducer,
  },
});

export default store;
