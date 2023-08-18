import React, { Fragment, useEffect } from "react";
import { CgMouse } from "react-icons/cg";
import "./Home.css";
import Product from "./Product";
import Metadata from "../layout/Metadata";
import { useDispatch, useSelector } from "react-redux";
import { allProductsFail, allProductsSuccess } from "../../slice";
import { getAllProducts } from "../../actions/productActions";
export default function Home() {
  const dispatch = useDispatch();
  const { loading, products, productsCount, error } = useSelector(
    (state) => state.product
  );

  useEffect(() => {
    const productsAll = async () => {
      const response = await getAllProducts();
      if (!response.success) {
        dispatch(allProductsFail(response));
      }
      dispatch(allProductsSuccess(response));
    };

    productsAll();
  }, [dispatch]);
  return (
    <Fragment>
      {loading ? (
        "loading"
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
