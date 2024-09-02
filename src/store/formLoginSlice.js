import { createSlice } from "@reduxjs/toolkit";

const initialLoginState = {
  email: { value: "", isValid: false },
  password: { value: "", isValid: false },
};

const formLoginSlice = createSlice({
  name: "formLogin",
  initialState: initialLoginState,
  reducers: {
    updateLoginFormField(state, action) {
      const { field, value, isValid } = action.payload;
      state[field] = { value, isValid };
    },
  },
});

export const { updateLoginFormField } = formLoginSlice.actions;
export default formLoginSlice.reducer;
