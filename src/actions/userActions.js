import axios from "axios";
import { loginFail, loginSuccess } from "../Slices/userSlice";

export const login = async (email, password, dispatch) => {
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
