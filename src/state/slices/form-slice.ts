import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IFormState {
  step: number;
  // data: {
  //   [key: string]: any;
  // };
  data: Record<string, any>;
}

const initialState: IFormState = {
  step: 1,
  data: {
    // firstName: '',
    // lastName: '',
    // email: '',
    // mobileNumber: '',
    // chemoType: '',
    // sex: '',
  },
};

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    // nextStep(state) {
    //   state.step += 1;
    // },
    // prevStep(state) {
    //   state.step -= 1;
    // },
    updateForm(state, action: PayloadAction<Record<string, any>>) {
      state.data = { ...state.data, ...action.payload };
    },
    setStep: (state, action: PayloadAction<number>) => {
      state.step = action.payload;
    },
    resetForm(state) {
      state.step = 1;
      state.data = initialState.data;
    },
  },
});

export const {
  // nextStep,
  // prevStep,
  updateForm,
  resetForm,
  setStep,
} = formSlice.actions;
export default formSlice.reducer;
