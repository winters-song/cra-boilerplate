// types
import { createSlice } from '@reduxjs/toolkit';
import {IAuthStore} from "@/models/auth";

// initial state
const initialState:IAuthStore = {
  logged: null,
  user: null
};


// ==============================|| SLICE - MENU ||============================== //

const auth = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login(state, action) {
      Object.assign(state, {
        user: action.payload,
        logged : true
      })

      console.log(action.payload)

      localStorage.setItem('token', action.payload.token)
    },


    updateUser(state, action) {
      Object.assign(state, {
        user: action.payload,
        logged : true
      })

      console.log(action.payload)
    },

    updateLogged(state, action) {
      state.logged = false
    },

    logout(state) {
      localStorage.removeItem('token')
      state.user = null;
      state.logged = false;
    }
  }
});

export default auth.reducer;

export const {
  login,
  updateUser,
  updateLogged,
  logout
} = auth.actions;
