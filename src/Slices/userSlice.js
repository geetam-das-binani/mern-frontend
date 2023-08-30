import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  user: {},
   error: null,
  isAuthenticatedUser: false,
};

const userReducer = createSlice({
  name: "user",
  initialState,

  reducers: {
    loginSuccess: (state, { payload }) => {
      state.user = payload;

      state.isAuthenticatedUser = true;
    },
    loginFail: (state, { payload }) => {
      state.error = payload;
      state.isAuthenticatedUser = false;
      state.user = null;
    },
    clearError: (state, action) => {
      state.error = null;
    },
    registerSuccess: (state, { payload }) => {
      state.user = payload;

      state.isAuthenticatedUser = true;
    },
    registerFail: (state, { payload }) => {
      state.error = payload;
      state.isAuthenticatedUser = false;
      state.user = null;
    },
    clearError: (state, action) => {
      state.error = null;
    },
  },
});

export default userReducer.reducer;

export const { loginSuccess, loginFail, clearError,registerFail,registerSuccess } = userReducer.actions;
