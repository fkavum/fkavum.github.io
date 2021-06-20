import React from 'react';
import {HashRouter as Router,Route,Redirect,Switch,} from "react-router-dom";   //BrowserRouter as Router
import "bootstrap/dist/css/bootstrap.min.css"

import Navbar from "./components/navbar.js"
import LandingPage from "./components/landingPage.js";
import NextPage from "./components/nextPage.js";
import SecondPage from "./components/secondPage";
import NotFound from "./components/404.js";

function App() {
  return (
    <Router baseName={process.env.PUBLIC_URL}>
      <div className="container">
      <br/>
      <Navbar />
      <Switch>
        <Route path="/" exact component={LandingPage} />
        <Route path="/nextPage" exact component={NextPage} />
        <Route path="/secondPage" exact component={SecondPage} />
        <Route path="/" component={NotFound} />
      </Switch>
      </div>
    </Router>
  );
}
export default App;
