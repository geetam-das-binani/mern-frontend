import React, { Fragment, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllProducts } from "../../actions/productActions";
import Loader from "../layout/loader/Loader";
import ProductCard from "../Home/ProductCard";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Product.css";
import { useParams } from "react-router-dom";
import Pagination from "react-js-pagination";
import Slider from '@mui/material/Slider';
import Typography from '@mui/material/Typography';
export default function Products() {
  const { keyword } = useParams();
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const [price,setPrice]=useState([0,25000])
  const { loading, products, productsCount, error, resultsPerPage } =
    useSelector((state) => state.products);
  const setCurrentPageNo = (e) => {
   
    setCurrentPage(e);
  };
  const priceHandler=(e,newPrice)=>{
    setPrice(newPrice)
  }
  useEffect(() => {
    if (error) {
      toast.error(error, { theme: "dark" });
    }
    getAllProducts(dispatch, keyword,currentPage);
  }, [dispatch, error, keyword,currentPage]);

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <h2 className="products__heading">Products</h2>
          {products.length === 0 ? (
            <p className="no__products__found">No Products found</p>
          ) : (
            ""
          )}
          <div className="products">
            {products &&
              products.map((product) => {
                return <ProductCard key={product._id} {...product} />;
              })}
          </div>

          <div className="filter__box">
            <Typography>Price</Typography>
              <Slider
           value={price}
           valueLabelDisplay="auto"
           onChange={priceHandler}
           aria-labelledby="range-slider"
           min={0}
           max={25000}
              
               />
          </div>
          {
            resultsPerPage < productsCount &&
            <div className="pagination__box">
            <Pagination
              itemsCountPerPage={resultsPerPage}
              totalItemsCount={productsCount}
              activePage={currentPage}
              onChange={setCurrentPageNo}
              nextPageText="Next"
              prevPageText="Prev"
              firstPageText="1st"
              lastPageText="last"
              itemClass="page__item"
              linkClass="page__link"
              activeClass="page__item__active"
              activeLinkClass="page_link__active"
            />
          </div>
          }
       
        </Fragment>
      )}
      <ToastContainer />
    </Fragment>
  );
}

