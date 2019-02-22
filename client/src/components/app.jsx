import React from "react";
import ReactDOM from "react-dom";
import Axios from "axios";
import ProductList from "./productList.jsx";

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
  };

  render() {
    return (
      <div>
        <h2 style={sectionTitle} className="section-title"><span style={titleUnderline} id="title-underline">Similar Options to Consider</span></h2>
        <ProductList products={this.state.products}/>
      </div>
    );
  };
};


const sectionTitle = {
  borderBottom: "1px solid black",
  fontWeight: 300,
  fontSize: "2.2em",
  fontFamily: 'helvetica-neue-light, Helvetica Neue, Helvetica',
  marginLeft: "3%",
  text: "#333",
  marginRight: "2%"
};

const titleUnderline = {
  borderBottom: "4px solid #f96302"
};

export default SimilarOptions;

