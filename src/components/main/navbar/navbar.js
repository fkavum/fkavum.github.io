import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

export default class Navbar extends Component {

    constructor(props) {
        super(props);
        this.state = {
          nav: 0,
          brandName: 0,
          brandTitle: 0,
          socialMed: 0,
          position: 0,
        };
    }

  componentDidMount(){
    document.title = "fkavum"


    // const [count, setCount] = useState(initialCount);  //https://tr.reactjs.org/docs/hooks-state.html

    this.setState({
      nav: document.querySelector('.main-nav'),
      brandName: document.querySelector('.brand-name'),
      brandTitle: document.querySelector('.brand-title'),
      socialMed: document.querySelector('.social-med'),
      position: 0,
    })
    // this.state.nav = document.querySelector('.main-nav');
    // this.state.brandName = document.querySelector('.brand-name');
    // this.state.brandTitle = document.querySelector('.brand-title');
    // this.state.socialMed = document.querySelector('.social-med');
    // this.state.position = 0;

    window.addEventListener('scroll', function () {
      console.log(this);
      if (this.state.position < window.pageYOffset + 1) {
        this.setState({position: window.pageYOffset});
  
          if (window.pageYOffset < 1) {
              this.bigNav();
          } else if (window.pageYOffset < 400) {
            this.smallNav();
          } else {
            this.closeNav();
          }
      } else {
        this.setState({position: window.pageYOffset});
          if (window.pageYOffset < 1) {
            this.bigNav();
          } else if (window.pageYOffset < 400) {
            this.smallNav();
          } else {
            this.smallNav();
          }
      }
  }.bind(this));
  }


   bigNav() {

    let nav = this.state.nav;
    let brandName = this.state.brandName;
    let brandTitle = this.state.brandTitle;
    let socialMed = this.state.socialMed;

    nav.classList = 'main-nav';
    brandName.classList = 'brand-name';
    brandTitle.classList = 'brand-title'
    socialMed.classList = 'social-med';
  }

   smallNav() {

    let nav = this.state.nav;
    let brandName = this.state.brandName;
    let brandTitle = this.state.brandTitle;
    let socialMed = this.state.socialMed;

    nav.classList = 'main-nav small-nav';
    brandName.classList = 'brand-name small-brand-name';
    brandTitle.classList = 'brand-title small-brand-title';
    socialMed.classList = 'social-med up';
  }

   closeNav() {
    let nav = this.state.nav;
    nav.classList = 'main-nav small-nav up';
  }

  render() {
    return (
        <nav className="main-nav">

        <div className="brand-area">
      
          <Link className="brand-name" to="/">Fatih Kavum</Link>
          <p className="brand-title">Software Engineer and Game Developer</p>
        </div>
        <div className="navbar-tabs-container">
          <div className="social-med">
            <a href="https://www.facebook.com/DcX23" target="_blank" rel="noreferrer"  className="fa fa-facebook"> </a> 
            <a href="https://www.linkedin.com/in/fkavum/" target="_blank" rel="noreferrer" className="fa fa-linkedin"> </a>
            <Link to="/underConstruction" className="fa fa-youtube"></Link>
            <Link to="/underConstruction" className="fa fa-instagram"></Link>
          </div>
          <div className="navbar-tabs row">
            <ul>
              <li>
                <div className="row ml-2">
                  <i className="material-icons">portrait</i>
                  <Link className="button-text" to="/underConstruction">Portfolio</Link>
                </div>
              </li>
              <li>
                <div className="row ml-2">
                  <i className="material-icons">portrait</i>
                  <Link className="button-text" to="/underConstruction">Projects</Link>
                </div>
              </li>
              <li>
                <div className="row mx-2">
                  <i className="material-icons">portrait</i>
                  <Link className="button-text" to="/underConstruction">Blog</Link>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}