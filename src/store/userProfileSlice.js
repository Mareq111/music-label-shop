/* import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isUserProfileOpen: false,
};

const userProfileSlice = createSlice({
  name: "userProfile",
  initialState,
  reducers: {
    toggleUserProfileModal(state) {
      state.isUserProfileOpen = !state.isUserProfileOpen;
    },
  },
});

export const { toggleUserProfileModal } = userProfileSlice.actions;
export default userProfileSlice.reducer;
 */

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isUserProfileOpen: false,
  profileView: "login", // New state to manage profile view (login or after login)
};

const userProfileSlice = createSlice({
  name: "userProfile",
  initialState,
  reducers: {
    toggleUserProfileModal(state) {
      state.isUserProfileOpen = !state.isUserProfileOpen;
    },
    setProfileView(state, action) {
      state.profileView = action.payload; // Set the profile view (login/after-login)
    },
  },
});

export const { toggleUserProfileModal, setProfileView } =
  userProfileSlice.actions;
export default userProfileSlice.reducer;
