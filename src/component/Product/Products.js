import React, { Fragment, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllProducts } from "../../actions/productActions";
import Loader from "../layout/loader/Loader";
import ProductCard from "../Home/ProductCard";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Product.css";
import { useParams } from "react-router-dom";
export default function Products() {
  const { keyword } = useParams();
  const dispatch = useDispatch();
  const { loading, products, productsCount, error } = useSelector(
    (state) => state.products
  );
  useEffect(() => {
    if (error) {
      toast.error(error, { theme: "dark" });
    }
    getAllProducts(dispatch, keyword);
  }, [dispatch, error, keyword]);
  console.log(products);
  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <h2 className="products__heading">Products</h2>
        
          <div className="products">
            {products &&
              products.map((product) => {
                return <ProductCard key={product._id} {...product} />;
              })}
          </div>
        </Fragment>
      )}
      <ToastContainer />
    </Fragment>
  );
}
