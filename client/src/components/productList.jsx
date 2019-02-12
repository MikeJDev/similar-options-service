import React from "react";
import Axios from "axios";
import ProductListItem from "./productListItem.jsx";

const ProductList = (props) => {
    return (
    <div class="product-list" style={productListStyle}>
      {props.products.map((product, key) => {
        return <ProductListItem product={product} key={key}/>
      })} 
    </div>
    )
};

const productListStyle = {
  display: "grid",
  gridTemplateColumns: "20% 20% 20% 20% 20%",
  width: "95%",
  marginLeft: "3%",
  marginRight: "2%",
  fontFamily: "helvetica-neue"
}

export default ProductList;