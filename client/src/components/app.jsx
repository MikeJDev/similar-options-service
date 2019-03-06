import React from "react";
import ReactDOM from "react-dom";
import Axios from "axios";
import ProductListItem from "./productListItem.jsx";
import Slider from "react-slick";

function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "#f96302" }}
      onClick={onClick}
    />
  );
}

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "#f96302" }}
      onClick={onClick}
    />
  );
}
//class starts here
class SimilarOptions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    };
  }

  componentDidMount() {
    Axios.get("/getFiveRandom").then(response => {
      console.log("Data returned is --> ", response.data);
      // this.setState({
      //   products: response.data
      // });
    });
    // window.addEventListener(
    //   "updateProduct",
    //   event => {
    //     Axios.get("/getFiveRandom").then(response => {
    //       this.setState({
    //         products: response.data
    //       });
    //     });
    //   },
    //   false
    // );
  }

  render() {
    const settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 3,
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />
    };

    return (
      <div style={componentDivStyle}>
        <h2 style={sectionTitleStyle} className="section-title">
          <span style={titleUnderlineStyle} id="title-underline">
            Similar Options to Consider
          </span>
        </h2>
        <div id="carousel-div">
          <Slider {...settings}>
            {/* {this.state.products.map((product, key) => {
              return <ProductListItem product={product} key={key} />;
            })} */}
          </Slider>
        </div>
      </div>
    );
  }
}

const componentDivStyle = {
  marginLeft: "5.1%",
  marginRight: "5%"
};

const sectionTitleStyle = {
  borderBottom: "1px solid rgb(204, 204, 204)",
  fontSize: "32px",
  fontWeight: 300,
  fontFamily: "helvetica-neue-light, Helvetica Neue, Helvetica",
  text: "#333"
};

const titleUnderlineStyle = {
  borderBottom: "4px solid #f96302"
};

export default SimilarOptions;
