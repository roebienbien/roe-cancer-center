import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../features/booking/api/booking-api.ts'
import { apiSlice } from "@/store/api/api-slice.ts";

export const store = configureStore({
  reducer: {
    counter: counterReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
