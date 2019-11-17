import React, {Component} from 'react';
import elements from '../data/elements';

export class NewCharacter extends Component {
  state = {
    characterName: "",
    characterSurname: "",
    attributesValue: [],
    abilities: [],
    armorClass: 0,
    initiative: 0,
    hitPoints: 0,
    bio: ""
  };

  render() {
    return (
      <div className="new-character-container">
        <div className="options">
          <div className="attributes-container">
            attributes
            <label><span>strength</span>
              <input type="number"/>
            </label>
            <label><span>dexterity</span>
              <input type="number"/>
            </label>
            <label><span>constitution</span>
              <input type="number"/>
            </label>
            <label><span>intelligence</span>
              <input type="number"/>
            </label>
            <label><span>wisdom</span>
              <input type="number"/>
            </label>
            <label><span>charisma</span>
              <input type="number"/>
            </label>

          <form className="new-character-form">
            <label><span>character's name</span>
              <input type="text"/>
            </label>
            <label><span>character's surname</span>
              <input type="text"/>
            </label>
            <label><span>race</span>
              <select>
                {elements.races.map(element =>
                  <option key={element}>{element}</option>
                )}
              </select>
            </label>
            <label><span>class</span>
              <select>
                {elements.classes.map(element =>
                  <option key={element}>{element}</option>
                )}
              </select>
            </label>
            <label><span>abilities</span>
              <select className="abilities-to-select">
                {elements.abilities.map(element =>
                <option key={element.name}>{element.name}</option>
                )}
              </select>
              <button>add</button>
            </label>
          </form>
          </div>
        </div>
        <div className="chosen-options">
          <ul className="chosen-abilities-container">
            abilities
          </ul>
        </div>
      </div>
    )
  }
}
