import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './slices/counter-slice';
import formReducer from './slices/form-slice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    form: formReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
// export type RootState1 = typeof store.getState
export type AppDispatch = typeof store.dispatch;
