import React, { Component } from 'react';
import './building.css'
import { Link } from 'react-router-dom';


export default class Navbar extends Component {

  render() {
    return (
    <div className = "mainBuilding">
        <div id="content">
            <h1>
                {"< building />"}
            </h1>
            <p>Working day and night!</p>
            <p><Link to="/">i dare!</Link></p>
        </div>
        <div id="outerCraneContainer">
            <div className="buildings">
                <div></div>
                <div className="1"></div>
                <div className="2"></div>
                <div className="3"></div>
                <div className="4"></div>
            </div>
            <div className="crane craneThree">
                <div className="line lineOne"></div>
                <div className="line lineTwo"></div>
                <div className="line lineThree"></div>
                <div className="stand"></div>
                <div className="weight"></div>
                <div className="cabin"></div>
                <div className="arm"></div>
            </div>
            <div className="crane craneTwo">
                <div className="line lineOne"></div>
                <div className="line lineTwo"></div>
                <div className="line lineThree"></div>
                <div className="stand"></div>
                <div className="weight"></div>
                <div className="cabin"></div>
                <div className="arm"></div>
            </div>
            <div className="crane craneOne">
                <div className="line lineOne"></div>
                <div className="line lineTwo"></div>
                <div className="line lineThree"></div>
                <div className="stand"></div>
                <div className="weight"></div>
                <div className="cabin"></div>
                <div className="arm"></div>
            </div>
        </div>
    </div>
    );
  }
}