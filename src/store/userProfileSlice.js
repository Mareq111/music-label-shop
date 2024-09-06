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
  },
});

export const { toggleUserProfileModal, setProfileView } =
  userProfileSlice.actions;
export default userProfileSlice.reducer;
