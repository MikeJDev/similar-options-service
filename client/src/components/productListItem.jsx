import React from "react";
import Axios from "axios";
import ProductListReview from "./productListReview.jsx";
import AddToCart from "./addToCart.jsx";

const ProductListItem = (props) => {
  return (
    <div style={gridStyleItem}>
      <img src={props.product.image_src}></img>
      <div><span style={productNameStyle}>{props.product.product_name} </span>
        {props.product.product_description}</div>
      <ProductListReview stars={props.product.review_stars} reviewCount={props.product.review_count}/>
      <div style={priceDivStyle}>$<span style={wholeNumberStyle}>{getWholeNumber(props.product.price)}</span>{getDecimal(props.product.price)}<span style={endOfLineStyle}>/each</span></div>
      <AddToCart />     
    </div>
  );
}; 

const getWholeNumber = (price) => {
  return Math.floor(price);
};

const getDecimal = (price) => {
  console.log("price is: ", price)
  return (((price % 1).toFixed(2)) * 100).toFixed(0); 
};

const gridStyleItem = {
  margin: 15,
  display: "grid",
  gridTemplateRows: "160px 60px 25px 28px 1fr",
};

const productNameStyle = {
  fontWeight: "bold"    
};

const priceDivStyle = {
  display: "flex",
  alignItems: "flex-start",
  fontSize: ".8em",
  fontWeight: "bold"   
};

const wholeNumberStyle = {
  fontSize: "2em"
};

const endOfLineStyle = {
  alignSelf: "flex-end", 
  fontWeight: "normal", 
  color: "#333"
};

export default ProductListItem;