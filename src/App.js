import React from 'react';
import {BrowserRouter as Router,Route,Redirect,Switch} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"

import Navbar from "./components/navbar.js"
import LandingPage from "./components/landingPage.js";
import NextPage from "./components/nextPage.js";
import NotFound from "./components/404.js";

function App() {
  return (
    <Router>
      <div className="container">
      <br/>
      <Switch>
        <Route path="/" exact component={LandingPage} />
        <Route path="/nextPage" exact component={NextPage} />
        <Route path="/" component={NotFound} />
        <Navbar />
      </Switch>
      </div>
    </Router>
  );
}
export default App;
