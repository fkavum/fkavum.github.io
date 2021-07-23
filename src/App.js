import React from 'react';
import {HashRouter as Router,Route,Redirect,Switch,} from "react-router-dom";   //BrowserRouter as Router
import "bootstrap/dist/css/bootstrap.min.css"

// import Navbar from "./components/dummy/navbar.js"
import Navbar from "./components/main/navbar/navbar.js"
import LandingPage from "./components/main/landingBackground/landingPage.js";
import NextPage from "./components/dummy/nextPage.js";
import SecondPage from "./components/dummy/secondPage";
import NotFound from "./components/dummy/404.js";

function App() {
  return (
    <Router baseName="tr">
      <div>
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
