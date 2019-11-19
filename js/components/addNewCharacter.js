import React, {Component} from 'react';
import elements from '../data/elements';

export class NewCharacter extends Component {
  state = {
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
    bio: "",
    basicModificators: {strength: "", dexterity: "", constitution: "", intelligence: "", wisdom: "", charisma: ""}
  };

  //Metody obsługujące inputy
  handleNameChange = e => {
    this.setState({
      characterName: e.target.value
    })
  };

  handleSurnameChange = e => {
    this.setState({
      characterSurname: e.target.value
    })
  };

  handleRaceChange = e => {
    this.setState({
      race: e.target.value
    })
  };

  handleClassChange = e => {
    this.setState({
      class: e.target.value
    })
  };

  handleAttributeChange = e => {
    const attributesValue = {...this.state.attributesValue};
    let elementToModify = e.target.name;
    attributesValue[e.target.name] = (e.target.value);
    this.setState({
      attributesValue: attributesValue
    }, () => {
      console.log(this.state.attributesValue);
      let modificator = this.modifcatorsGenerator(this.state.attributesValue[elementToModify]);
      let basicModificators = {...this.state.basicModificators};
      basicModificators[elementToModify] = modificator;
      this.setState({
        basicModificators: basicModificators
      }, () => console.log(this.state.basicModificators))
    })
  };

  handleAbilitiesChosen = e => {
    e.preventDefault();
    const abilities = [...this.state.abilities];
    abilities.push(this.selectEl.value);

    this.setState({
      abilities: abilities,
    }, () => console.log(this.state.abilities))
  };

  removeAbility = elm => {
    const abilities = this.state.abilities.filter(element => element !== elm);

    this.setState({
      abilities: abilities,
    })
  };

  handleArmorClass = e => {
    this.setState({
      armorClass: e.target.value
    })
  };

  handleInitiative = e => {
    this.setState({
      initiative: e.target.value
    })
  };

  handleHitPoints = e => {
    this.setState({
      hitPoints: e.target.value
    })
  };

  handleBio = e => {
    this.setState({
      bio: e.target.value
    })
  };

  modifcatorsGenerator = (a) => {
    let modificator;
    if (a <= 1) {
      modificator = -5
    }
    else if (a <= 3){
      modificator = -4
    }
    else if (a <= 5){
      modificator = -3
    }
    else if (a <= 7){
      modificator = -2
    }
    else if (a <= 9){
      modificator = -1
    }
    else if (a <= 11){
      modificator = 0
    }
    else if (a <= 13){
      modificator = 1
    }
    else if (a <= 15){
      modificator = 2
    }
    else if (a <= 17){
      modificator = 3
    }
    else if (a <= 19){
      modificator = 4
    }
    else if (a <= 20){
      modificator = 5
    }
    console.log(modificator);
    return modificator

  };


  render() {
    return (
      <div className="new-character-container">
        <div className="options">
          <div className="attributes-container">

      {/*Atrybuty*/}

            attributes
            <label>
              <span>
                strength
              </span>
              <input
                className="attr"
                type="number"
                name="strength"
                value={this.state.attributesValue.strength}
                onChange={this.handleAttributeChange}/>
            </label>
            <label>
              <span>
                dexterity
              </span>
              <input
                className="attr"
                type="number"
                name="dexterity"
                value={this.state.attributesValue.dexterity}
                onChange={this.handleAttributeChange}/>
            </label>
            <label>
              <span>
                constitution
              </span>
              <input
                className="attr"
                type="number"
                name="constitution"
                value={this.state.attributesValue.constitution}
                onChange={this.handleAttributeChange}/>
            </label>
            <label>
              <span>
                intelligence
              </span>
              <input
                className="attr"
                type="number"
                name="intelligence"
                value={this.state.attributesValue.intelligence}
                onChange={this.handleAttributeChange}/>
            </label>
            <label>
              <span>
                wisdom
              </span>
              <input
                className="attr"
                type="number"
                name="wisdom"
                value={this.state.attributesValue.wisdom}
                onChange={this.handleAttributeChange}/>
            </label>
            <label>
              <span>
                charisma
              </span>
              <input
                className="attr"
                type="number"
                name="charisma"
                value={this.state.attributesValue.charisma}
                onChange={this.handleAttributeChange}/>
            </label>

      {/* Formularz */}

          <form className="new-character-form">

          {/*inputy*/}
            <label>
              <span>
                character's name
              </span>
              <input
                type="text"
                name="characterName"
                value={this.state.characterName}
                onChange={this.handleNameChange}/>
            </label>
            <label>
              <span>
                character's surname
              </span>
              <input
                type="text"
                name="characterSurname"
                value={this.state.characterSurname}
                onChange={this.handleSurnameChange}/>
            </label>

          {/*opcje*/}

            <label>
              <span>
                race
              </span>
              <select
                value={this.state.race}
                onChange={this.handleRaceChange}>
                {elements.races.map(element => <option key={element} value={element}>{element}</option>)}
              </select>
            </label>
            <label>
              <span>
                class
              </span>
              <select
                value={this.state.class}
                onChange={this.handleClassChange}>
                {elements.classes.map(element => <option key={element} value={element}>{element}</option>)}
              </select>
            </label>
            <label>
              <span>
                armor class
              </span>
              <input
                type="number"
                name="armorClass"
                value={this.state.armorClass}
                onChange={this.handleArmorClass}/>
            </label>
            <label>
              <span>
                initiative
              </span>
              <input
                type="number"
                name="initiative"
                value={this.state.initiative}
                onChange={this.handleInitiative}/>
            </label>
            <label>
              <span>
                hit points
              </span>
              <input
                type="number"
                name="hitPoints"
                value={this.state.hitPoints}
                onChange={this.handleHitPoints}/>
            </label>
            <label>
              <span>
                abilities
              </span>
              <select
                className="abilities-to-select"
                ref={(el) => this.selectEl = el}>
                {this.state.availableAbilities.filter(({name}) =>
                  !this.state.abilities.includes(name)).map(element =>
                  <option key={element.name} value={element.name} name={element.name}>{element.name}</option>)}
              </select>
              <button onClick={this.handleAbilitiesChosen}>add</button>
            </label>
          </form>
          </div>


          <div>modificators
          <div style={{color:"white"}}>siła: {this.state.attributesValue.strength}</div>
          </div>


          <div>Obrazek</div>
        </div>
        <div className="chosen-options">
          <ul className="chosen-abilities-container">
            abilities
            {this.state.abilities.map(element => <li key={element}>{element}<button onClick={()=>this.removeAbility(element)}>remove</button></li>)}
          </ul>
          <textarea name="bio" value={this.state.bio} onChange={this.handleBio}/>
        </div>
        <button onClick={() => this.props.onDone(this.state)}>save</button>
      </div>
    )
  }
}
