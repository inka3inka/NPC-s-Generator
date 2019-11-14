import React, { Component } from 'react';
import {Navigation} from './navigation';
import { Route, HashRouter as Router, Switch , Link} from'react-router-dom';
import {MainPage} from "./mainPage";
import {Characters} from "./characters";
import {NewCharacter} from "./addNewCharacter";

export class MainContainer extends Component {
  render() {
    return (
      <div className="container">
        <Router>
          <Navigation/>
        <div className="main-container">
          <Switch>
            <Route path="/mainPage" component={MainPage} />
            <Route path="/characters" component={Characters} />
            <Route path="/addNewCharacter" component={NewCharacter} />
          </Switch>
        </div>
        </Router>
      </div>

  );
  }
}
