import React, { Fragment, useEffect } from "react";
import { CgMouse } from "react-icons/cg";
import "./Home.css";
import Product from "./Product";
import Metadata from "../layout/Metadata";
import { useDispatch, useSelector } from "react-redux";
// import { allProductsFail, allProductsSuccess } from "../../Slices/productsSlice";
import { getAllProducts } from "../../actions/productActions";

import Loader from "../layout/loader/Loader";
import { useAlert } from "react-alert";
export default function Home() {
  const alert = useAlert();
  const dispatch = useDispatch();
  const { loading, products, productsCount, error } = useSelector(
    (state) => state.products
  );
 
  useEffect(() => {
   if(error){
    alert.error(error)
   }
    getAllProducts(dispatch)

  }, [dispatch, error,alert]);
 
  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <Metadata title="ECOMMERCE" />

          <div className="banner">
            <p>Welcome to E-commerce</p>
            <h1>FIND AMAZING PRODUCTS BELOW</h1>
            <a href="#container">
              <button>
                Scroll <CgMouse />
              </button>
            </a>
          </div>
          <div className="home_heading">Featured Products</div>
          <div className="container" id="container">
            {products &&
              products.map((data, index) => {
                return <Product key={index} {...data} />;
              })}
          </div>
          
        </Fragment>
      )}
    </Fragment>
  );
}
