import { createSlice } from "@reduxjs/toolkit";

const bookingSlice = createSlice({
  name: 'booking',
  initialState: {
    step: 1
  },
  reducers: {
    nextStep: (state) => {
      state.step += 1
    }
  }
})

export const { nextStep } = bookingSlice.actions;
export default bookingSlice.reducer
