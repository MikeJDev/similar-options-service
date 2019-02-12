import React from "react";
import Axios from "axios";

const ProductListReview = (props) => {
  
  return props.stars === 0 ? 
  (<div>
    <span style={noStar} className="fa fa-star"></span>
    <span style={noStar} className="fa fa-star"></span>
    <span style={noStar} className="fa fa-star"></span>
    <span style={noStar} className="fa fa-star"></span>
    <span style={noStar} className="fa fa-star"></span>
    <span>{props.reviewCount}</span>
  </div>) : props.stars === 1 ? 
  (<div>
    <span style={star} className="fa fa-star"></span>
    <span style={noStar} className="fa fa-star"></span>
    <span style={noStar} className="fa fa-star"></span>
    <span style={noStar} className="fa fa-star"></span>
    <span style={noStar} className="fa fa-star"></span>
    <span>{props.reviewCount}</span>
  </div>) : props.stars === 2 ? 
  (<div>
    <span style={star} className="fa fa-star"></span>
    <span style={star} className="fa fa-star"></span>
    <span style={noStar} className="fa fa-star"></span>
    <span style={noStar} className="fa fa-star"></span>
    <span style={noStar} className="fa fa-star"></span>
    <span>{props.reviewCount}</span>
  </div>) : props.stars === 3 ? 
  (<div>
    <span style={star} className="fa fa-star"></span>
    <span style={star} className="fa fa-star"></span>
    <span style={star} className="fa fa-star"></span>
    <span style={noStar} className="fa fa-star"></span>
    <span style={noStar} className="fa fa-star"></span>
    <span>{props.reviewCount}</span>
  </div>) : props.stars === 4 ? 
  (<div>
    <span style={star} className="fa fa-star"></span>
    <span style={star} className="fa fa-star"></span>
    <span style={star} className="fa fa-star"></span>
    <span style={star} className="fa fa-star"></span>
    <span style={noStar} className="fa fa-star"></span>
    <span>{props.reviewCount}</span>
  </div>) : 
  (<div>
    <span style={star} className="fa fa-star"></span>
    <span style={star} className="fa fa-star"></span>
    <span style={star} className="fa fa-star"></span>
    <span style={star} className="fa fa-star"></span>
    <span style={star} className="fa fa-star"></span>
    <span>{props.reviewCount}</span>
  </div>)
}


const star = {
  color: "#f96302"
}
const noStar = {
  color: "grey"
}

export default ProductListReview;