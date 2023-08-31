import axios from "axios";
import {
  loginFail,
  loginSuccess,
  registerSuccess,
  registerFail,
} from "../Slices/userSlice";

export const login = async (dispatch, email, password) => {
  try {
    const { data } = await axios.post(`http://localhost:8000/login`, {
      email,
      password,
    });
    dispatch(loginSuccess(data.user));
  } catch (error) {
    if (error.message === "Network Error") {
      return dispatch(loginFail(error.message));
    }

    dispatch(loginFail(error.response.data.errorMessage));
  }
};
export const register = async (dispatch, userData) => {
  try {
    const config = { headers: { "Content-Type": "multipart/form-data" } };
    const { data } = await axios.post(
      `http://localhost:8000/register`,

      userData,

      config
    );
    dispatch(registerSuccess(data.user));
  } catch (error) {
    if (error.message === "Network Error") {
      return dispatch(registerFail(error.message));
    }

    dispatch(registerFail(error.response.data.errorMessage));
  }
};
