import React from "react";
import ReactDOM from "react-dom";
import Axios from "axios";
import ProductList from "./components/productList.jsx";

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            products: []
        }
    }
    
    componentDidMount() {
        let url = "/getFiveRandom";
        Axios.get(url).then(response => {
          console.log('Data returned is --> ', response.data);
          this.setState({
            products: response.data
          });
        });


    }
    
    

    render() {
        // const componentStyle = {
        //     li 
        //         display:inline;
            
        // }
        return (
            <div>
              <ProductList products={this.state.products}/>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('tony'));