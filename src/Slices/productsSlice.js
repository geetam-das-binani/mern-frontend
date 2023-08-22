import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  loading: true,
  productsCount: 0,
  error: null,

};

const productsReducer = createSlice({
  name: "products",
  initialState,

  reducers: {
    allProductsSuccess: (state, { payload }) => {
      state.products = payload.products;
      state.loading = false;
      state.productsCount = payload.productCounts;
    },
    allProductsFail: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
    clearErrors: (state, action) => {
      state.error = null;
    },
  
 
}
});

export default productsReducer.reducer;

export const { allProductsFail, allProductsSuccess, clearErrors} =
  productsReducer.actions;