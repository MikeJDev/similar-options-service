import React from "react";
import Axios from "axios";
import ProductListItem from "./productListItem.jsx";

const ProductList = (props) => {
    const componentStyle = {
      listStyleType: "none"
    }
    return (
    // <ul style={{display: "inline"}}>
    <ul style={componentStyle}>
       {props.products.map((product, key) => {
         return <ProductListItem product={product} key={key}/>
       })} 
    </ul>
    )
};
  
export default ProductList;