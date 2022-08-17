import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (

    <nav className="navBar">
      <ul>
      <li>
          <Link to="/Account">Account</Link>
        </li>
        <li>
          <Link to="/">Home</Link>
        </li>
    <nav className="navBar flex ">
      <ul className="flex">
        <li className="mr-6">
          <Link className="text-3xl text-blue-500 hover:text-blue-800" to="/">Home</Link>

        </li>
        <li className="mr-6">
          <Link className="text-3xl text-blue-500 hover:text-blue-800" to="/playWithFriends">Play With Friends</Link>
        </li>
        <li className="mr-6">
          <Link className="text-3xl text-blue-500 hover:text-blue-800" to="/CorrectMap">Quiz</Link>
        </li>
      </ul>
      </nav>
      </ul>
      </nav>
      
  );
  
}

export default Navbar;

