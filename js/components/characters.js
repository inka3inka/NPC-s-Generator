import React, {Component} from 'react';
import { HashRouter as Router , Link} from'react-router-dom';
export class Characters extends Component {
  state = {
    actuallyBaseOfCharacters: this.props.baseOfCharacters
  }
  remover = (elm) => {
    const currentBase = this.state.actuallyBaseOfCharacters.filter(element => element !== elm);
    this.setState({
      actuallyBaseOfCharacters: currentBase
    })
  }
  render() {
    return (
      <div className="all-characters-container">
        <h1>your characters</h1>
        <div className="character-tile-container horizontal">
          <div className="character-tile vertical">
            <div>Abelardo Cadmael</div>
            <div>rouge</div>
            <div>human</div>
          </div>
          <div className="tile-graphic-container">
            <div className="tile-graphic" />
          </div>
          <div className="buttons-container vertical">
            <Router>
              <Link ><button>open</button></Link>
              <Link><button>edit</button></Link>
              <Link><button>remove</button></Link>
            </Router>
          </div>
        </div>
        {this.props.baseOfCharacters.map((element, characterId) => {
          return (
            <div className="character-tile-container horizontal" key={element.characterSurname}>
              <div className="character-tile vertical">
                <div>{element.characterName} {element.characterSurname}</div>
                <div>{element.class}</div>
                <div>{element.race}</div>
              </div>
              <div className="tile-graphic-container">
                <div className="tile-graphic" />
              </div>
              <div className="buttons-container vertical">
                <Router>
                  <Link to={`/characterSheet/${characterId}`}><button>open</button></Link>
                  <Link to={`/editCharacter/${characterId}`}><button>edit</button></Link>
                </Router>
                <button onClick={() => {this.remover; this.props.onDone(this.state.actuallyBaseOfCharacters)}}>remove</button>
              </div>
            </div>
          )
        })}
      </div>
    )
  }
}