import React from "react";
import Axios from "axios";

class AddToCart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: false,
      itemInCart: false
    };
  };
  
  toggleStyle() {
    this.setState({hover: !this.state.hover});
  };
  
  handleClick() {
    this.setState({itemInCart: !this.state.itemInCart});
  };

  render() {
    let hoverStyle;
    if(this.state.hover) {
      hoverStyle = {backgroundColor: "#f96302", color: "white"};
    } else {
      hoverStyle = {backgroundColor: "white", color: "#f96302"};
    };
    
    return (
      <div>
        <div onClick={() => this.handleClick()} onMouseEnter={this.toggleStyle.bind(this)} onMouseLeave={this.toggleStyle.bind(this)} style={Object.assign({}, addToCartStyle, hoverStyle)}>{this.state.itemInCart ? <p>Remove From Cart</p> : <p>Add To Cart</p>}</div>
        {this.state.itemInCart ? <p style={confirmationStyle}>Item added to cart</p> : <p></p>}
      </div>
    );
  };
};

const confirmationStyle = {
  color: "#f96302",
  fontFamily: "helvetica-neue-bold,Helvetica Neue,Helvetica"
};

const addToCartStyle = {
  width: 166,
  height: 34,
  border: "2px solid #f96302",
  color: "#f96302",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginTop: 10,
  fontFamily: "helvetica-neue-bold,Helvetica Neue,Helvetica",
  fontWeight: "bold",
  fontSize: "1em"
};

export default AddToCart;