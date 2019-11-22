import React, {Component} from 'react';
import { HashRouter as Router , Link} from'react-router-dom';


export class Navigation extends Component {
  render() {
    return (
      <Router>
        <div className="nav-container horizontal">
          <Link to="/mainPage" className="nav-element">main page</Link>
          <Link to="/characters" className="nav-element">characters</Link>
          <Link to="/addNewCharacter" className="nav-element">add new character</Link>
        </div>
      </Router>
    )
  }
}