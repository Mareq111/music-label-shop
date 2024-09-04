/* import { createSlice } from "@reduxjs/toolkit";

// Initial state
const initialState = {
  isAuthenticated: false,
  userProfile: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    // log in
    login: (state, action) => {
      state.isAuthenticated = true;
      state.userProfile = action.payload;
    },
    // logout
    logout: (state) => {
      state.isAuthenticated = false;
      state.userProfile = null;
    },
    // update profile
    updateProfile: (state, action) => {
      if (state.userProfile) {
        state.userProfile = { ...state.userProfile, ...action.payload };
      }
    },
  },
});

export const { login, logout, updateProfile } = authSlice.actions;

export default authSlice.reducer;
 */

/* import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: false,
  userProfile: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.isAuthenticated = true;
      state.userProfile = action.payload;
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.userProfile = null;
    },
    updateProfile: (state, action) => {
      if (state.userProfile) {
        state.userProfile = { ...state.userProfile, ...action.payload };
      }
    },
  },
});

export const { login, logout, updateProfile } = authSlice.actions;
export default authSlice.reducer;
 */

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: false,
  userProfile: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.isAuthenticated = true;
      state.userProfile = action.payload;
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.userProfile = null;
    },
    updateProfile: (state, action) => {
      if (state.userProfile) {
        state.userProfile = { ...state.userProfile, ...action.payload };
      }
    },
  },
});

export const { login, logout, updateProfile } = authSlice.actions;
export default authSlice.reducer;
