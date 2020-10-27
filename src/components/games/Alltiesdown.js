import React, {Fragment} from 'react';

import placeholder_image_one from '../../images/bg-placeholder-one.svg';
import placeholder_image_two from '../../images/bg-placeholder-two.svg';
import placeholder_image_three from '../../images/bg-placeholder-three.svg';

const subheading_clases = "font-in-red text-md text-left xl:text-4xl"
const text_clases = "xl:text-2xl leading-7 tracking-track-01 mb-8"
const image_heading_clases = "text-4xl text-center text-white p-8 leading-none tracking-tiny-wide uppercase lato fw-400 break-words"
const image_subheading_clases = "font-in-red text-lg text-center xxl:text-4xl mb-5"

const Alltiesdown = (props) =>  (
	<Fragment>
			<h2 className="all-ties-down mx-3 my-10 xl:max-w-full xl:mx-auto xl:mb-10 lato-thin uppercase text-center text-4xl xl:text-6xl shadow-lg lato fw-300">
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

		<h2 className={image_heading_clases}>
			EXPLORE THE LAND
		</h2>
			<h3 className={image_subheading_clases}>
				CAN YOU SPEAK TO CRYSTALS?
			</h3>
		<img src={placeholder_image_one}
				alt="A lovely background" 
				className="border-8 border-in-grey shadow-lg">
		</img>
		<h2 className={image_heading_clases}>
			FIGHT THE SYSTEM
		</h2>
		<h3 className={image_subheading_clases}>
			ITS SERVANTS: DARK GUARDS & EXTRACTORS
		</h3>
	
		<img src={placeholder_image_two}
				alt="A lovely background" 
				className="border-8 border-in-grey shadow-lg">
		</img>
		<h2 className={image_heading_clases}>
			SOLVE THE MYSTERY
		</h2>
		<h3 className={image_subheading_clases}>
				WHO'S THE MOTHER OF THIS PLANET?
		</h3>
		<img src={placeholder_image_three}
				alt="A lovely background" 
				className="border-8 border-in-grey shadow-lg">
		</img>

	</Fragment>
)

export default Alltiesdown 
