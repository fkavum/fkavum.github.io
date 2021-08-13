import React, { Component } from 'react';
import './404.css'
import { Link } from 'react-router-dom';

export default class Navbar extends Component {


            // Parallax Code
        //var scene = document.getElementById('scene');
        //var parallax = new Parallax(scene);

  render() {
    return (
    <div className = "main404">
        <section className="wrapper">

<div className="container">

    <div id="scene" className="scene" data-hover-only="false">


        <div className="circle" data-depth="1.2"></div>

        <div className="one" data-depth="0.9">
            <div className="content">
                <span className="piece"></span>
                <span className="piece"></span>
                <span className="piece"></span>
            </div>
        </div>

        <div className="two" data-depth="0.60">
            <div className="content">
                <span className="piece"></span>
                <span className="piece"></span>
                <span className="piece"></span>
            </div>
        </div>

        <div className="three" data-depth="0.40">
            <div className="content">
                <span className="piece"></span>
                <span className="piece"></span>
                <span className="piece"></span>
            </div>
        </div>

        <p className="p404" data-depth="0.50">404</p>
        <p className="p404" data-depth="0.10">404</p>

    </div>

    <div className="text">
        <article>
            <p>Uh oh! Looks like you got lost. <br/>Go back to the homepage if you dare!</p>
            <button><Link to="/">i dare!</Link></button>
        </article>
    </div>

</div>
</section>
    </div>
    );
  }
}