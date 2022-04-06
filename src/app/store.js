import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import counterMeSlice from "../features/counterMe/counterMeSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    counterMe: counterMeSlice,
  },
});
