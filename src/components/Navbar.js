import React from "react";

const Navbar = () => (
  <nav className="nav-bg-gradient top-0 md:text-4xl text-xl w-full mb-16">
    <div className="grid grid-cols-3 pr-10 pl-4 py-10 tracking-widest uppercase lato fw-300 sm:text-center text-white shadow-inner fw-400">
      <a href="#play">
        <li className="focus:text-gray-400 hover:text-gray-800 cursor-pointer pl-5">
          play
        </li>
      </a>
      <a href="#listen">
        <li className="focus:text-gray-400 hover:text-gray-800 cursor-pointer">
          listen
        </li>
      </a>
      <a href="#connect">
        <li className="focus:text-gray-400 hover:text-gray-800 cursor-pointer">
          connect
        </li>
      </a>
    </div>
  </nav>
);

export default Navbar;
