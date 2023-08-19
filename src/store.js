import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import productsReducer from './Slices/productsSlice'
import productReducer from './Slices/productSlice'
const store = configureStore({
  reducer: {
    products: productsReducer,
    product:productReducer
  },
  middleware: [thunk],
});
export {store}
