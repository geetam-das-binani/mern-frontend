import axios from "axios";
import { allProductsFail, allProductsSuccess } from "../Slices/productsSlice";
import { productFail, productSuccess } from "../Slices/productSlice";

export const getAllProducts = async (
  dispatch,
  keyword = "",
  currentPage = 1
) => {
  try {
    let link = `http://localhost:8000/products?keyword=${keyword}&page=${currentPage}`;
    const { data } = await axios.get(link);
    dispatch(allProductsSuccess(data));
    return data;
  } catch (error) {
    if (error.message === "Network Error") {
      return dispatch(allProductsFail(error.message));
    }

    dispatch(allProductsFail(error.response.data.errorMessage));
  }
};

export const getProductDetails = async (dispatch, id) => {
  try {
    const { data } = await axios.get(`http://localhost:8000/product/${id}`);
    dispatch(productSuccess(data.product));
    return data.product;
  } catch (error) {
    if (error.message === "Network Error") {
      return dispatch(productFail(error.message));
    }

    dispatch(productFail(error.response.data.errorMessage));
  }
};
