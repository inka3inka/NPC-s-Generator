import React, { Component } from 'react';
import ReactDOM from "react-dom";

import {MainContainer} from './components/mainContainer';

class App extends Component {
  render(){
    return (
      <MainContainer />
    )
  }
}

ReactDOM.render(<App />, document.getElementById("app"));