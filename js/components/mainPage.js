import React, {Component} from 'react';
import {Link} from "react-router-dom";

export class MainPage extends Component {

  render() {
    return (

        <div className="curtain">


          <div className="curtain__wrapper">
            <div className="first-text">
              <div className="introduction-text">
                Welcome to NPC's Generator
              </div>
              <div className="enter-text">
                ENTER to start
              </div>
              <Link to="/characters" className="nav-element"><button className="enter-button">

                enter

              </button>
              </Link>

            </div>

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
