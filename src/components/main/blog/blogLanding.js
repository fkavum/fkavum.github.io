import React, { Component } from 'react';
import './blogLanding.css'
export default class BlogLanding extends Component {

  render() {
    return (
        <div>
        <div class="projcard-container">
		
    <div class="projcard projcard-blue">
      <div class="projcard-innerbox">
        <img class="projcard-img" src="https://picsum.photos/800/600?image=1041" />
        <div class="projcard-textbox">
          <div class="projcard-title">Card Title</div>
          <div class="projcard-subtitle">This explains the card in more detail</div>
          <div class="projcard-bar"></div>
          <div class="projcard-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
          <div class="projcard-tagbox">
            <span class="projcard-tag">HTML</span>
            <span class="projcard-tag">CSS</span>
          </div>
        </div>
      </div>
    </div>
    
    <div class="projcard projcard-red">
      <div class="projcard-innerbox">
        <img class="projcard-img" src="https://picsum.photos/800/600?image=1080" />
        <div class="projcard-textbox">
          <div class="projcard-title">That's Another Card</div>
          <div class="projcard-subtitle">I don't really this that I need to explain anything here</div>
          <div class="projcard-bar"></div>
          <div class="projcard-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
          <div class="projcard-tagbox">
            <span class="projcard-tag">PHP</span>
            <span class="projcard-tag">SQL</span>
            <span class="projcard-tag">Database</span>
          </div>
        </div>
      </div>
    </div>
    
    <div class="projcard projcard-green">
      <div class="projcard-innerbox">
        <img class="projcard-img" src="https://picsum.photos/800/600?image=1039" />
        <div class="projcard-textbox">
          <div class="projcard-title">And a Third Card</div>
          <div class="projcard-subtitle">You know what this is by now</div>
          <div class="projcard-bar"></div>
          <div class="projcard-description">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</div>
          <div class="projcard-tagbox">
            <span class="projcard-tag">Excel</span>
            <span class="projcard-tag">VBA</span>
          </div>
        </div>
      </div>
    </div>
    

    
  </div>
      </div>
    );
  }
}