import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isUserProfileOpen: false,
  profileView: "login",
};

const userProfileSlice = createSlice({
  name: "userProfile",
  initialState,
  reducers: {
    toggleUserProfileModal(state) {
      state.isUserProfileOpen = !state.isUserProfileOpen;
    },
    setProfileView(state, action) {
      state.profileView = action.payload;
    },
    logout(state) {
      state.isUserProfileOpen = false;
      state.profileView = "login";
    },
  },
});

export const { toggleUserProfileModal, setProfileView, logout } =
  userProfileSlice.actions;
export default userProfileSlice.reducer;
