import { fabClasses } from "@mui/material";
import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  user: {},
  loading: true,
  error: null,
  isAuthenticatedUser: false,
};

const userReducer = createSlice({
  name: "user",
  initialState,

  reducers: {
    loginSuccess: (state, { payload }) => {
      state.user = payload;
      state.loading = false;
      state.isAuthenticatedUser=true
    },
    loginFail: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
      state.isAuthenticatedUser=false
      state.user=null
    },
    clearLoginError: (state, action) => {
      state.error = null;
    },
  },
});

export default userReducer.reducer;

export const { loginSuccess, loginFail, clearLoginError } = userReducer.actions;
