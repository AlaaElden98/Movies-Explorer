import {configureStore} from '@reduxjs/toolkit';
import myListReducer from './myListSlice';

export default configureStore({
  reducer: {
    myList: myListReducer,
  },
});
