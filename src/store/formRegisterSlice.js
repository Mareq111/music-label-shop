import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: { value: "", isValid: false },
  password: { value: "", isValid: false },
  fullName: { value: "", isValid: false },
};

const formRegisterSlice = createSlice({
  name: "formRegister",
  initialState,
  reducers: {
    updateLoginFormField(state, action) {
      const { field, value, isValid } = action.payload;
      state[field] = { value, isValid };
    },
  },
});

export const { updateLoginFormField } = formRegisterSlice.actions;
export default formRegisterSlice.reducer;
