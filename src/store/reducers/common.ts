// types
import { ICommonStore } from '@/models/common';
import { createSlice } from '@reduxjs/toolkit';

// initial state
const initialState:ICommonStore = {
  pageTitle: '',
};


// ==============================|| SLICE - MENU ||============================== //

const auth = createSlice({
  name: 'common',
  initialState,
  reducers: {
    
    updatePageTitle(state, action) {
      state.pageTitle = action.payload
    },
  }
});

export default auth.reducer;

export const {
  updatePageTitle
} = auth.actions;
