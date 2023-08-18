import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  products: [],
  loading: true,
  productsCount: 0,
  error: null,
};
const productReducer = createSlice({
  name: "product",
  initialState, 
  reducers: {
    allProducts: (state, action) => {
      state.products = [];
      state.loading = true;
    },
    allProductsSuccess: (state, { payload }) => {
      state.products = payload.products;
      state.loading = false;
      state.productsCount = payload.productCounts;
    },
    allProductsFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    clearErrors: (state, action) => {
      state.error = null;
    },
  },
});

export default productReducer.reducer;
export const { allProducts, allProductsFail, allProductsSuccess, clearErrors } =
  productReducer.actions;
