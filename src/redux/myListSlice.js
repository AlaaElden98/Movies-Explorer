import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

import {storeData, getData} from '../AsyncStorage/asyncStorage';

const initialState = {
  items: [],
};

export const getListFromAsyncStorage = createAsyncThunk(
  'myList/getListFromAsyncStorage',
  async () => {
    const data = await getData('myList');
    return data != null ? data : initialState;
  },
);

const myListSlice = createSlice({
  name: 'myList',
  initialState,
  reducers: {
    addItem: (state, action) => {
      let items = state.items;
      items.push(action.payload);
      state.items = items;
      storeData('myList', state.items);
    },
    removeItem: (state, action) => {
      let items = state.items;
      let index = items.findIndex(item => item.id === action.payload);
      items.splice(index, 1);
      state.items = items;
      storeData('myList', state.items);
    },
  },
  extraReducers: builder => {
    builder.addCase(getListFromAsyncStorage.fulfilled, (state, action) => {
      state.items = action.payload;
    });
  },
});

export const {addItem, removeItem} = myListSlice.actions;

export default myListSlice.reducer;
