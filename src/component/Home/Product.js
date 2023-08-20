import React from "react";
import { Link } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
export default function Product({ name, images, _id, price ,ratings,numOfReviews}) {
  const options = {
    edit: false,
    color: "rgba(20,20,20,.1)",
    activeColor: "tomato",
    value: ratings,
    isHalf: true,
    size: window.innerWidth < 600 ? 20 : 25,
  };
  console.log(images);
  return (
    <Link className="product_Card" to={`/product/${_id}`}>
      <img src={images[0].url} alt={name} />
      <p>{name}</p>
      <div>
        <ReactStars {...options} /> <span> {numOfReviews} Reviews </span>
      </div>
      <span>₹{price}</span>
    </Link>
  );
  
}
