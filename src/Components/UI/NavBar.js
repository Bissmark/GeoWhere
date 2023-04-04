import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navBar flex justify-center ">
      <ul className="flex">
        <li className="mr-6">
          <Link className="text-3xl text-yellow-500 hover:text-orange-700" to="/">Home</Link>
        </li>
        <li className="mr-6">
          <Link className="text-3xl text-yellow-500 hover:text-orange-700" to="/">Play With Friends</Link>
        </li>
        <li className="mr-6">
          <Link className="text-3xl text-yellow-500 hover:text-orange-700" to="/Account">Account</Link>
        </li>
        <li className="mr-6">
          <Link className="text-3xl text-yellow-500 hover:text-orange-700" to="/Quizform">Quiz</Link>
        </li>
      </ul>
    </nav>     
  );
}

export default Navbar;