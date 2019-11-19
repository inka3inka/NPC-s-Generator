import React, {Component} from 'react';
import { HashRouter as Router , Link} from'react-router-dom';

export class Characters extends Component {
  render() {
    return (
      <div className="all-characters-container">
        {this.props.baseOfCharacters.map((element, characterId) => {
          return (
            <div key={element.characterSurname}>
              <div>{element.characterName}</div>
              <div>{element.characterSurname}</div>
              <div>{element.race}</div>
              <div>{element.class}</div>
              <Router>
                <Link to={`/editCharacter/${characterId}`} className="nav-element"><button>edit</button></Link>
                <Link to={`/characterSheet/${characterId}`} className="nav-element"><button>open</button></Link>
              </Router>
            </div>
          )
        })}
      </div>
    )
  }
}
