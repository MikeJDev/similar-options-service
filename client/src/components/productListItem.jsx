import React from "react";
import Axios from "axios";

const ProductListItem = (props) => {

    return (
    <div style={flexStyleItem}>
      <img src={props.product.image_src}></img> <br></br>   
      <span style={listItemStyle}>{props.product.product_name} </span>
      {props.product.product_description}<br></br>
      {props.product.review_stars} <br></br>
      {props.product.review_count} <br></br>
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