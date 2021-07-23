import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {

  componentDidMount(){
    document.title = "fkavum"
  }


  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/" className="navbar-brand">ExcerTracker</Link>
        <div className="collpase navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
          <Link to="/" className="nav-link">Home</Link>
          </li>
          <li className="navbar-item">
          <Link to="/nextPage" className="nav-link">NextPage</Link>
          </li>
          <li className="navbar-item">
          <Link to="/thirdPage" className="nav-link">ThirdPage</Link>
          </li>
        </ul>
        </div>
      </nav>
    );
  }
}