import React, {Component} from 'react';

export class Characters extends Component {
  render() {
    return (
      <div className="all-characters-container">
        {this.props.baseOfCharacters.map(element => {
          return (
            <div key={element.characterSurname}>
              <div>{element.characterName}</div>
              <div>{element.characterSurname}</div>
              <div>{element.race}</div>
              <div>{element.class}</div>
              <button>edit</button>
              <NewCharacter />
            </div>
          )
        })}
      </div>
    )
  }
}
