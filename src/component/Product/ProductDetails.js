import React, { Fragment, useEffect } from "react";
import { useParams } from "react-router-dom";
import Carousel from 'react-material-ui-carousel'
import "./ProductDetails.css";
import { useDispatch, useSelector } from "react-redux";
import { getProductDetails } from "../../actions/productActions";
import { useAlert } from "react-alert";

export default function ProductDetails() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const alert = useAlert();

  const { product, loading, error } = useSelector((state) => state.product);
  
  useEffect(() => {
    if(error){
      alert.error(error)
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
                    className="Carousel_Image"
                  />
                );
              })}
          </Carousel>
        </div>
      </div>
    </Fragment>
  );
}
