import { createSlice } from "@reduxjs/toolkit";

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
