import React from "react";
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";
import "./NavBar.scss";

export default function Root(props) {
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
            <a href="https://lee-aaron.github.io/resume" target="_blank">Resume</a>
          </li>
        </ol>
      </nav>
    </Router>
  );
}
