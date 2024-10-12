import { createSlice } from "@reduxjs/toolkit";
import actRegister from "./act/actRegister.js";
import actLogin from "./act/actLogin.js";

const initialState = {
  users: [],
  user: "",
  loading: "idle",
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // register
    builder.addCase(actRegister.pending, (state) => {
      state.loading = "pending";
      state.error = null;
    });
    builder.addCase(actRegister.fulfilled, (state, action) => {
      state.loading = "succeeded";
    });
    builder.addCase(actRegister.rejected, (state, action) => {
      state.loading = "failed";
      if (typeof action.payload === "string") {
        state.error = action.payload;
      }
    });

    // login
    builder.addCase(actLogin.pending, (state) => {
      state.loading = "pending";
      state.error = null;
    });
    builder.addCase(actLogin.fulfilled, (state, action) => {
      state.loading = "succeeded";
      state.user = action.payload;
    });
    builder.addCase(actLogin.rejected, (state, action) => {
      state.loading = "failed";
      if (typeof action.payload === "string") {
        state.error = action.payload;
      }
    });
  },
});

export default authSlice.reducer;
export { actRegister, actLogin };
