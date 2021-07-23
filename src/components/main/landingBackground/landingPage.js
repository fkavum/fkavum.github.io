import React, { Component } from 'react';
import LandingBG from './landingbg.js'
import './landingPage.css'
export default class LandingPage extends Component {



  componentDidMount() {
    const gsapScript = document.createElement("script");
    gsapScript.src = "https://unpkg.com/typer-dot-js@0.1.0/typer.js";
    gsapScript.async = true;
    gsapScript.onload = () => this.scriptLoaded("gsap");
    
    document.body.appendChild(gsapScript);
  } 

  scriptLoaded(){

  }

  render() {
    return (
      <div>
        <LandingBG />
        <div className="projcard-container">
          <div className="projcard projcard-blue">
            <div className="projcard-innerbox">
              <img className="projcard-img" alt="" src="https://picsum.photos/800/600?image=1041" />
              <div className="projcard-textbox">
                <div className="projcard-title">Hi!</div>
                <div className="projcard-subtitle">My name is Fatih!</div>
                <div className="projcard-bar"></div>
                <div className="projcard-description">
                <h1>I am a 
  <span class="typer" id="main" data-words=" Software Developer, Game Developer, Gamer!, Technology Enthusiast" data-delay="100" data-deleteDelay="5000"></span>
  <span class="cursor" data-owner="main"></span>
</h1>
                </div>
                <div className="projcard-tagbox">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}