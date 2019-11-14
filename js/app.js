import React, { Component } from 'react';
import ReactDOM from "react-dom";

import {ReceiptHeader} from './components/main';

class App extends Component {
  render(){
    return <ReceiptHeader/>
  }
}

ReactDOM.render(<App />, document.getElementById("app"));