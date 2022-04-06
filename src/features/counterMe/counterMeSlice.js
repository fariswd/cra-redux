import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchCount } from "../counter/counterAPI";

const initialState = {
  count: 99,
  status: "pending",
};

export const incrementMeAsync = createAsyncThunk(
  "counterMe/increment",
  async (amount) => {
    const response = await fetchCount(amount);
    return response.data;
  }
);

export const counterMeSlice = createSlice({
  name: "counterMe",
  initialState,
  reducers: {
    add: (state, action) => {
      state.count = state.count + 1;
    },
    dec: (state, action) => {
      state.count = state.count - 1;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(incrementMeAsync.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(incrementMeAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.count = state.count + action.payload;
      });
  },
});

export const { add, dec } = counterMeSlice.actions;

export const selectCount = (state) => {
  return state.counterMe.count;
};
export const selectStatus = (state) => {
  return state.counterMe.status;
};

export default counterMeSlice.reducer;
