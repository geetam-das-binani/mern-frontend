import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import {CgMouse} from 'react-icons/cg'
import './Home.css'

export default function Home() {
  return (
    <Fragment>
      <div className="banner">
        <p>Welcome to E-commerce</p>
        <h1>FIND AMAZING PRODUCTS BELOW</h1>
        <Link to="#container">
          <button>Scroll <CgMouse/></button>
        </Link>
      </div>
    </Fragment>
  );
}
