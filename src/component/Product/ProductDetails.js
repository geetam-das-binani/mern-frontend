import React, { Fragment, useEffect } from "react";
import { useParams } from "react-router-dom";
import Carousel from "react-material-ui-carousel";
import "./ProductDetails.css";
import { useDispatch, useSelector } from "react-redux";
import { getProductDetails } from "../../actions/productActions";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ReactStars from "react-rating-stars-component";

export default function ProductDetails() {
  const { id } = useParams();
  const dispatch = useDispatch();

  const { product, loading, error } = useSelector((state) => state.product);
  const options = {
    edit: false,
    color: "rgba(20,20,20,.1)",
    activeColor: "tomato",
    value: product.ratings,
    isHalf: true,
    size: window.innerWidth < 600 ? 20 : 25,
  };
  useEffect(() => {
    if (error) {
      toast.error(error, { theme: "dark" });
    }
    getProductDetails(dispatch, id);
  }, [dispatch, error, alert, id]);
  return (
    <Fragment>
      <div className="product_Details">
        <div> 
          <Carousel>
            {product.images &&
              product.images.map((item, i) => {
                return (
                  <img
                    key={item.url}
                    src={item.url}
                    alt={`${i}Slide`}
                    className="carousel_Image"
                  />
                );
              })}
          </Carousel>
        </div>
        <div>
          <div className="details_Block-1">
            <h2>{product.name}</h2>
            <p>Product # {product._id}</p>
          </div>
          <div className="details_Block-2">
            <ReactStars {...options} />
            <span>{product.numOfReviews}Reviews </span>
          </div>
          <div className="details_Block-3">
            <h1>₹{product.price}</h1>
         
          <div className="details_Block-3-1">
            <div className="details_Block-3-1-1">
              <button>-</button>
              <input type="number" value="1" />
              <button>+</button>
            </div>
            <button>Add to Cart</button>
          </div>
          <p>
            Status
            <b className={product.stock < 1 ? "red_Color" : "green_Color"}>
              {product.stock < 1 ? "OutOfStock" : "InStock"}
            </b>
          </p>
          </div>
          <div className="details_Block-4">
            Description  : <p>{product.description}</p>
          </div>

         <button className="submit_Button">
          Submit Review
         </button>
        </div>
      </div>
      <ToastContainer />
    </Fragment>
  );
}
