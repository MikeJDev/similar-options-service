import React from "react";
import ReactDOM from "react-dom";
import Axios from "axios";
import ProductList from "./productList.jsx";
import ProductListItem from "./productListItem.jsx";
// import "~slick-carousel/slick/slick.css"; 
// import "~slick-carousel/slick/slick-theme.css";
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

class SimilarOptions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    products: []
    };
  };
    
componentDidMount() {
  let url = "/getFiveRandom";
  Axios.get(url).then(response => {
    console.log('Data returned is --> ', response.data);
    this.setState({
      products: response.data
    });
  });
  window.addEventListener('updateProduct', (event) => {
    let url = "/getFiveRandom";
    Axios.get(url).then(response => {
      this.setState({
        products: response.data
      });
    });
  }, false);
};

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
      <div style={carouselDivStyle}>
        <h2 style={sectionTitle} className="section-title"><span style={titleUnderline} id="title-underline">Similar Options to Consider</span></h2>
        <div>
        <Slider {...settings}>
        {this.state.products.map((product, key) => {
        return <ProductListItem product={product} key={key}/>
        })} 
          {/* <div>
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div> */}


        </Slider>

        </div>
        {/* <ProductList products={this.state.products}/> */}
      </div>
    );
  };
};

const carouselDivStyle = {
  marginLeft: "5.1%",
  marginRight: "5%"
}

const sectionTitle = {
  // borderBottom: "1px solid black",
  borderBottom: "1px solid rgb(204, 204, 204)",
  // fontSize: "2.2em",
  fontSize: "32px",
  fontWeight: 300,
  fontFamily: 'helvetica-neue-light, Helvetica Neue, Helvetica',
  //width: "90%",
  // marginLeft: "5.1%",
  text: "#333",
  //marginRight: "5%"
};

const titleUnderline = {
  borderBottom: "4px solid #f96302"
};

export default SimilarOptions;

