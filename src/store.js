import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import productReducer from './slice'
const store = configureStore({
  reducer: {
    product: productReducer,
  },
  middleware: [thunk],
});
export {store}
