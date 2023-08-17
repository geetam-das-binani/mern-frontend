import React, { Fragment } from "react";

import {CgMouse} from 'react-icons/cg'
import './Home.css'
import Product from './Product'

export default function Home() {
  const product={
    name:"Tshirt",
    price:999,
    _id:'33266562',
    images:[{url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnQiDBKUxOFfasNg09H4gGC2g_C4QOSPyRjQ&usqp=CAU'}]
  }
  return (
    <Fragment>
      <div className="banner">
        <p>Welcome to E-commerce</p>
        <h1>FIND AMAZING PRODUCTS BELOW</h1>
        <a href="#container">
          <button>Scroll <CgMouse/></button>
        </a>
      </div>
      <div className="home_heading">
        Featured Products
      </div>
      <div className="container" id="container">
      <Product {...product}/>
      <Product {...product}/>
      <Product {...product}/>
      <Product {...product}/>
      <Product {...product}/>
      <Product {...product}/>
      <Product {...product}/>
      <Product {...product}/>
      </div>
    </Fragment>
  );
}
