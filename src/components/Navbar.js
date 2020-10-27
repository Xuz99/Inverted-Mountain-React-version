import React from 'react'

const Navbar = () =>  (
	<nav className="flex bg-gradient-to-b from-green-400 via-teal-400 to-blue-500 sticky top-0 xl:text-4xl text-2xl shadow-outline w-full mb-10">
        <ul className="flex flex-wrap xl:flex-no-wrap xxl:p-8 py-10 mx-auto items-center uppercase lato fw-300 tracking-widest space-x-5 xxl:space-x-10 text-center text-white shadow-inner">
          <li className="focus:text-grey-400 hover:shadow-inner w-1/3 cursor-pointer" href="#play">play</li> 
          <li className="focus:text-grey-400 hover:shadow-inner w-1/3 cursor-pointer" href="#listen">listen</li> 
          <li className="focus:text-grey-400 hover:shadow-inner w-1/3 cursor-pointer" href="#connect">connect</li> 
        </ul>
    </nav>
    )
		
export default Navbar;











	
  