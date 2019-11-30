import React, {Component} from 'react';
import { HashRouter as Router , Link} from'react-router-dom';
export class Characters extends Component {
  state = {
    baseOfCharactersAfterRemove: this.props.baseOfCharacters
  };

  remover = (removedElm) => {
    const currentBase = [...this.state.baseOfCharactersAfterRemove];
    currentBase.splice(removedElm.id, 1);
    this.setState({
      baseOfCharactersAfterRemove: currentBase
    }, () => this.props.onDone(this.state.baseOfCharactersAfterRemove))
  };

  render() {
    return (
      <div className="all-characters-container">
        <h1>your characters</h1>

        {this.props.baseOfCharacters.map((element, characterId) => {
          return (
            <div className="character-tile-container horizontal" key={element.characterSurname}>
              <div className="character-tile vertical">
                <div>{element.characterName} {element.characterSurname}</div>
                <div>{element.class}</div>
                <div>{element.race}</div>
              </div>
              <div className="tile-graphic-container">
                <div className="tile-graphic" style={{backgroundImage: `url(${element.selectedFile.url})`, backgroundSize: "cover"}}/>
              </div>
              <div className="buttons-container vertical">
                <Router>
                  <Link to={`/characterSheet/${characterId}`}><button>open</button></Link>
                  <Link to={`/editCharacter/${characterId}`}><button>edit</button></Link>
                </Router>
                <button onClick={() => {this.remover(element.characterName)}}>remove</button>
              </div>
            </div>
          )
        })}
      </div>
    )
  }
}