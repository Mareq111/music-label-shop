import { createSlice } from "@reduxjs/toolkit";

const layoutSlice = createSlice({
  name: "layout",
  initialState: { layoutView: "grid" },
  reducers: {
    setLayoutView(state, action) {
      state.layoutView = action.payload;
    },
  },
});

export const { setLayoutView } = layoutSlice.actions;

export default layoutSlice.reducer;
