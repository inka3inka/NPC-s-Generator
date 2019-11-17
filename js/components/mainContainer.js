import React, { Component } from 'react';
import {Navigation} from './navigation';
import { Route, HashRouter as Router, Switch , Link} from'react-router-dom';
import {MainPage} from "./mainPage";
import {Characters} from "./characters";
import {NewCharacter} from "./addNewCharacter";
import {EditCharacter} from "./editCharacter";
import elements from "../data/elements";

export class MainContainer extends Component {
  state = {
    characters: []
  };

  showCharacters = (newCharacter) => {
    const characters = [...this.state.characters, newCharacter];
    this.setState({
      characters: characters
    })
  };

  render() {
    return (
      <div className="container">
        <Router>
          <Navigation/>
        <div className="main-container">
          <Switch>
            <Route path="/mainPage" component={MainPage} />
            <Route path="/characters">
              <Characters baseOfCharacters={this.state.characters}/>
            </Route>
            <Route path="/addNewCharacter">
              <NewCharacter onDone={this.showCharacters}/>
            </Route>
            <Route path="/editCharacter/:characterId" children={({ match: { params: { characterId}}}) => {

              return <EditCharacter character={this.state.characters[characterId]} />
            }}>

            </Route>
          </Switch>
        </div>
        </Router>
      </div>

  );
  }
}
/*
characterName: "",
  characterSurname: "",
  rece: "",
  class: "",
  attributesValue: {strength: "", dexterity: "", constitution: "", intelligence: "", wisdom: "", charisma: ""},
availableAbilities: elements.abilities,
  abilities: [],
  armorClass: "",
  initiative: "",
  hitPoints: "",
  bio: ""

 */
