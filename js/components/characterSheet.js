import React, {Component} from 'react';

export class CharacterSheet extends Component {

  renderAttrib = () => {
    const attributes = this.props.character.attributesValue;
    let arrayOfAttributes = [];
    for (const key in attributes) {
      arrayOfAttributes.push(<div className="element tile" key={key}>{key}: {attributes[key]}</div>)

    }
      return arrayOfAttributes
  }

  renderAbilities = () => {
    const abilities = this.props.character.abilities;
    let arrayOfAbilities = [];
    for (const key in abilities) {
      arrayOfAbilities.push(<div className="element tile" key={key}>{abilities[key]}</div>)

    }
    return arrayOfAbilities
  }

  render(){
    return(
      <div className="characters-container vertical">

        <div className="main-information-container horizontal">
          <div className="information vertical">
            <div className="main-information-name vertical"> {this.props.character.characterName} {this.props.character.characterSurname}</div>
              <div className="main-information-other">
                <div>{this.props.character.class}</div>
                <div>{this.props.character.race}</div>
              </div>
            </div>
            <div className="photo-container"> <div className="photo" style={{backgroundImage: `url(${this.props.character.selectedFile.url})`, backgroundSize: 'cover'}}/> </div>
        </div>

        <div className="other-information-container vertical">
          <div className="element">armor class: {this.props.character.armorClass}</div>
          <div className="element">initiative: {this.props.character.initiative}</div>
          <div className="element">hit points: {this.props.character.hitPoints}</div>
          <div className="element">damages: </div>

          <div className="element attributes horizontal">
            {this.renderAttrib()}
          </div>

          <div className="element abilities horizontal">
            {this.renderAbilities()}
          </div>

          <div className="bio element">{this.props.character.bio}</div>
        </div>
      </div>
    )
  }
}

