import {configureStore} from '@reduxjs/toolkit';

import myListReducer from './myListSlice';

export default store = configureStore({
  reducer: {
    myList: myListReducer,
  },
});
