import axios from "axios";
import { allProductsFail, allProductsSuccess } from "../Slices/productsSlice";

export const getAllProducts = async (dispatch) => {
  try {
    const { data } = await axios.get("http://localhost:8000/products");
    dispatch(allProductsSuccess(data));
    return data;
  } catch (error) {
    if (error.message === "Network Error") {
      return dispatch(allProductsFail(error.message));
    }

    dispatch(allProductsFail(error.response.data.errorMessage));
  }
};

export const getProductDetails = async (id) => {
  try {
    const { data } = await axios.get(`http://localhost:8000/product/${id}`);
    return data.product;
  } catch (error) {
    console.log(error.message);
  }
};
