import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navBar my-5">
      <ul class="flex">
        <li class="mr-6">
          <Link class="text-3xl text-blue-500 hover:text-blue-800" to="/">Home</Link>
        </li>
        <li class="mr-6">
          <Link class="text-3xl text-blue-500 hover:text-blue-800" to="/playWithFriends">Play With Friends</Link>
        </li>
        <li class="mr-6">
          <Link class="text-3xl text-blue-500 hover:text-blue-800" to="/Quiz">Quiz</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;

