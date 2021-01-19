import React from 'react'

const Navbar = () =>  (
	<nav className="nav-bg-gradient top-0 md:text-4xl text-xl w-full mb-10">
    <ul className="grid grid-cols-3 pr-10 pl-2 py-10 tracking-widest uppercase lato fw-300 sm:text-center text-white shadow-inner fw-400">
      <li className="focus:text-grey-400 hover:shadow-inner cursor-pointer pl-5" href="#play">play</li> 
      <li className="focus:text-grey-400 hover:shadow-inner cursor-pointer" href="#listen">listen</li> 
      <li className="focus:text-grey-400 hover:shadow-inner cursor-pointer" href="#connect">connect</li> 
    </ul>
  </nav>
  )

export default Navbar;
