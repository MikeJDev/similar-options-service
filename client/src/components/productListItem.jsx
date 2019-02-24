import React from "react";
import Axios from "axios";
import ProductListReview from "./productListReview.jsx";
import AddToCart from "./addToCart.jsx";

class ProductListItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      hover: false
    };
  };  

  toggleStyle() {
    this.setState({hover: !this.state.hover});
  };

  render() {
    let hoverStyle;
    if(this.state.hover) {
      hoverStyle = {textDecoration: "underline", cursor: "pointer"};
    } else {
      hoverStyle = {textDecoration: "none"}; 
    };
    return (
      <div style={productStyle}>
        <div style={imageStyle}><img src={this.props.product.image_src}></img></div>
        <div 
          onMouseEnter={this.toggleStyle.bind(this)} 
          onMouseLeave={this.toggleStyle.bind(this)}
          style={hoverStyle}
          onClick={updateProduct(this.props.product.product_id)}
        ><span style={productNameStyle}>{this.props.product.product_name} </span>
          {this.props.product.product_description}
        </div>
        <ProductListReview stars={this.props.product.review_stars} reviewCount={this.props.product.review_count}/>
        <div style={priceDivStyle}>$<span style={wholeNumberStyle}>{getWholeNumber(this.props.product.price)}</span>{getDecimal(this.props.product.price)}<span style={endOfLineStyle}>/each</span></div>
        <AddToCart />     
      </div>
    );
  };
}

const updateProduct = (item) => () => {
  const event = new CustomEvent('updateProduct', { detail: item });
  console.log("Event dispacted is -->", event);
  window.dispatchEvent(event);
  window.scrollTo(0, 0);
}

const getWholeNumber = (price) => {
  return Math.floor(price);
};

const getDecimal = (price) => {
  return (price % 1).toFixed(2).split('.')[1];
};

const productStyle = {
  margin: 15,
  display: "grid",
  gridTemplateRows: "160px 80px 25px 28px 100px",
  width: 180,
  fontFamily: "helvetica-neue"
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

const imageStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
}

export default ProductListItem;