import React from "react";
import Axios from "axios";
import ProductListReview from "./productListReview.jsx";

const ProductListItem = (props) => {

    return (
    <div style={flexStyleItem}>
      <img src={props.product.image_src}></img> <br></br>   
      <span style={listItemStyle}>{props.product.product_name} </span>
      {props.product.product_description}<br></br>
      <ProductListReview stars={props.product.review_stars} reviewCount={props.product.review_count}/>
      ${props.product.price}/each <br></br>     
    </div>
    )
};

const flexStyleItem = {
    margin: 15
};

const listItemStyle = {
   fontWeight: 'bold'    
};

export default ProductListItem;