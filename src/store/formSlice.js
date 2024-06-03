/* import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  fullName: { value: '', isValid: false },
  phoneNumber: { value: '', isValid: false },
  email: { value: '', isValid: false },
  country: { value: '', isValid: false },
  zipCode: { value: '', isValid: false },
  city: { value: '', isValid: false },
  address: { value: '', isValid: false },
  deliveryOption: { value: '', isValid: false },
};

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    updateFormField(state, action) {
      const { field, value, isValid } = action.payload;
      state[field] = { value, isValid };
    },
  },
});

export const { updateFormField } = formSlice.actions;
export default formSlice.reducer;
 */


import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  fullName: { value: '', isValid: false },
  phoneNumber: { value: '', isValid: false },
  email: { value: '', isValid: false },
  country: { value: '', isValid: false },
  zipCode: { value: '', isValid: false },
  city: { value: '', isValid: false },
  address: { value: '', isValid: false },
  deliveryOption: { value: '', isValid: false },
};

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    updateFormField(state, action) {
        //, isValid was after value
      const { field, value } = action.payload;
      //isValid set on true, before was nothing
      state[field] = { value, isValid: true };
    },
  },
});

export const { updateFormField } = formSlice.actions;
export default formSlice.reducer;
