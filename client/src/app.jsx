import React from "react";
import ReactDOM from "react-dom";
import Axios from "axios";

class App extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
              Testing the webpack/babel config.  Tesing one more time.
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));