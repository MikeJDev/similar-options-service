import React from "react";
import ReactDOM from "react-dom";
import Axios from "axios";

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
        return (
            <div>
              Testing the webpack/babel config.  Tesing one more time.
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('tony'));