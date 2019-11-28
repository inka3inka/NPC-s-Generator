import React, {Component} from 'react';

export class MainPage extends Component {

  render() {
    return (

        <div className="curtain">


          <div className="curtain__wrapper">

            <button className="enter-button">enter</button>

            <input type="checkbox" defaultChecked/>


            <div className="curtain__panel curtain__panel--left">


            </div>


            <div className="curtain__prize">

            </div>


            <div className="curtain__panel curtain__panel--right">

            </div>

          </div>

        </div>
    )
  }
}
