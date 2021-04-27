import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from '../../pages/Home/Home';
import Projects from '../../pages/Projects/Projects';
import "./NavBar.scss";

function NavBar() {
  return (
    <Router>
      <nav className="links">
        <ol>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <Link to="/resume">Resume</Link>
          </li>
        </ol>
      </nav>

      <Switch>
        <Route path="/projects">
          <Projects />
        </Route>
        <Route path="/resume">

        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default NavBar;