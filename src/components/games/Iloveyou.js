import React, {Fragment} from 'react';

const subheading_clases = "font-in-red text-md text-left xl:text-4xl"
const text_clases = "xl:text-2xl leading-7 tracking-track-01 mb-8"

const Iloveyou  = (props) =>  (
	<Fragment>
	<h2 className="i-love-you mx-3 my-10 xl:max-w-full xl:mx-auto xl:mb-10 lato-thin uppercase text-center text-4xl xl:text-6xl shadow-lg lato fw-300">
	{props.title}
	</h2>
	<h2 className={subheading_clases}>
	YEAR OF RELEASE
	</h2>
	<p className={text_clases}>
	{props.year_of_release}
	</p>
	<h2 className={subheading_clases}>
	GENRES
	</h2>
	<p className={text_clases}>
	{props.genres}
	</p>
	<h2 className={subheading_clases}>
	WHAT IT'S ALL ABOUT
	</h2>
	<p className={text_clases}>
	{props.what_its_all_about}
	</p>
	</Fragment>
	)

export default Iloveyou 