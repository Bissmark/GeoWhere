import React, { useState } from "react";
import { Link } from "react-router-dom";
import HomePicture from './../../globe.gif'

function Navbar() {
  const [openNav, setOpenNav] = useState(false);

  return (
    <nav class="bg-white border-gray-200 dark:bg-slate-900">
      <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <div class="flex items-center">
          <img src={HomePicture} class="h-8 mr-3" alt="Flowbite Logo" />
          <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">GeoWhere</span>
        </div>
        <div>
          <button
            onClick={() => setOpenNav(!openNav)}
            type="button"
            class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span class="sr-only">
              Open main menu
            </span>
            <svg
              class="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"
              >
              </path>
            </svg>
          </button>
        </div>

        <div class={`w-full block flex-grow lg:flex lg:items-center lg:w-auto ${openNav ? 'block' : 'hidden'}`} id="navbar-default">
          <ul class="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <Link
                to='/'
                onClick={() => setOpenNav(!openNav)}
                class='block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 hover:bg-transparent md:border-0 hover:text-blue-700 md:p-0 dark:text-white dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white dark:hover:bg-transparent'
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to='/'
                onClick={() => setOpenNav(!openNav)}
                class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Play With Friends
              </Link>
            </li>
            <li>
              <Link
                to='/Account'
                onClick={() => setOpenNav(!openNav)}
                class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Account
              </Link>
            </li>
            <li>
              <Link
                to='/Quizform'
                onClick={() => setOpenNav(!openNav)}
                class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Quiz
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;