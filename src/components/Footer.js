import React from 'react'


const date = new Date(); 
const year = date.getFullYear(); 

// Date done 28-01-21

const Footer = () =>  (
	<footer className="flex-auto mx-auto p-5 border-2 border-blue-600  text-blue-600">
		<p className="text-md xxl:text-2xl text-center lato fw-300 tracking-track-01">
			inverted mountain.<br/> 
			copyright © {year}. all rights reserved.
		</p>
	</footer>
	)
export default Footer;