import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navBar">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/playWithFriends">Play With Friends</Link>
        </li>
        <li>
          <Link to="/Quiz">Quiz</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;

