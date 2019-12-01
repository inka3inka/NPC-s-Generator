import React, { Component } from 'react';
import {Navigation} from './navigation';
import { Route, HashRouter as Router, Switch , Link} from'react-router-dom';
import {MainPage} from "./mainPage";
import {Characters} from "./characters";
import {NewCharacter} from "./addNewCharacter";
import {EditCharacter} from "./editCharacter";
import {CharacterSheet} from "./characterSheet";
import {About} from "./about";

export class MainContainer extends Component {
  state = {
    characters: [],
    editedCharacter: ""
  };

  showCharacters = (newCharacter) => {
    const characters = [...this.state.characters, newCharacter];
    this.setState({
      characters: characters
    })
  };

  showEditedCharacter = (editedCharacter, index) => {
    const characters = [...this.state.characters];
    characters[index] = editedCharacter;
    this.setState({ characters });
  };

  renderStateAfterRemove = (character) => {
    console.log(character);
    let characters = [...this.state.characters];
    characters = characters.filter(element => element.characterName !== character);
    this.setState({
      characters: characters
    })
  }

  render() {
    return (
      <div className="container">
        <Router>
          <Navigation/>
        <div className="main-container">
          <Switch>
            <Route path="/mainPage" component={MainPage} />
            <Route path="/characters">
              <Characters baseOfCharacters={this.state.characters} onDone={this.renderStateAfterRemove}/>
            </Route>
            <Route path="/addNewCharacter">
              <NewCharacter onDone={this.showCharacters}/>
            </Route>
            <Route path="/about" component={About}/>
            <Route path="/editCharacter/:characterId" children={({ match: { params: { characterId}}}) => {

              return <EditCharacter character={this.state.characters[characterId]} id={characterId} onDone={this.showEditedCharacter}/>
            }}>

            </Route>
            <Route path="/characterSheet/:characterId" children={({ match: { params: { characterId}}}) => {

              return <CharacterSheet character={this.state.characters[characterId]} id={characterId} onDone={this.renderStateAfterRemove}/>
            }}>

            </Route>
          </Switch>
        </div>
        </Router>
      </div>

  );
  }
}

