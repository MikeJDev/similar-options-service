import React from "react";
import Axios from "axios";

const ProductListItem = (props) => {
    const componentStyle = {
        display: "inline-block",
        width: 200,
        border: "1px solid black",
        padding: 10
      };
    return (
     <li style={componentStyle}>
      <img src={props.product.image_src}></img> <br></br>   
      {props.product.product_name} <br></br>
      {props.product.product_description}...<br></br>
      {props.product.review_stars} <br></br>
      {props.product.review_count} <br></br>
      ${props.product.price}/each <br></br>
     
     </li>
    )
};
  
export default ProductListItem;