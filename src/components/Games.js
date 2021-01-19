import React, { Component, Fragment}  from 'react';

import placeholder_image_one from '../images/bg-placeholder-one.svg';
import placeholder_image_two from '../images/bg-placeholder-two.svg';
import placeholder_image_three from '../images/bg-placeholder-three.svg';

const subheading_clases = "font-in-red text-md text-left xl:text-4xl";
const text_clases = "xl:text-2xl leading-7 tracking-track-01 mb-8";
const image_heading_clases = "text-4xl text-center text-white mt-12 leading-none tracking-tiny-wide uppercase lato fw-400 break-words";
const image_subheading_clases = "font-in-red text-md text-center xxl:text-4xl mb-5";
const image_clases = "border-8 border-in-grey shadow-lg";

class Game extends Component {
	constructor(props) {
		super(props)
		this.state = {
			showImages: this.props.showImages
		}
	}

render() {
	return (
		this.state.showImages ?
		<Fragment>
		<div>
			<h2 className={this.props.custom_class + " whitespace-pre py-10 my-10 lato-thin uppercase text-center text-4xl xl:text-6xl shadow-lg lato fw-300"}>
				{this.props.title}
			</h2>
			<h2 className={subheading_clases}>
				YEAR OF RELEASE
			</h2>
			<p className={text_clases}>
				{this.props.year_of_release}
			</p>
			<h2 className={subheading_clases}>
				GENRES
			</h2>
			<p className={text_clases}>
				{this.props.genres}
			</p>
			<h2 className={subheading_clases}>
				WHAT IT'S ALL ABOUT
			</h2>
			<p className={text_clases}>
				{this.props.what_its_all_about}
			</p>
		</div>
		<div>
			<h2 className={image_heading_clases}>
				EXPLORE THE LAND
			</h2>
			<h3 className={image_subheading_clases}>
				CAN YOU SPEAK TO CRYSTALS?
			</h3>
			<img src={placeholder_image_one}
				alt="A lovely background" 
				className={image_clases}>
			</img>
			<h2 className={image_heading_clases}>
				FIGHT THE SYSTEM
			</h2>
			<h3 className={image_subheading_clases}>
				ITS SERVANTS: DARK GUARDS & EXTRACTORS
			</h3>
			<img src={placeholder_image_two}
				alt="A lovely background" 
				className={image_clases}>
			</img>
			<h2 className={image_heading_clases}>
				SOLVE THE MYSTERY
			</h2>
			<h3 className={image_subheading_clases}>
				WHO'S THE MOTHER OF THIS PLANET?
			</h3>
			<img src={placeholder_image_three}
				alt="A lovely background" 
				className={image_clases}>
			</img>
		</div>
		</Fragment>
		:
		<Fragment>
		<div>
			<h2 className={this.props.custom_class + " overflow-hidden my-10 lato-thin uppercase text-center text-2xl xl:text-6xl shadow-lg lato fw-300"}>
				{this.props.title}
			</h2>
			<h2 className={subheading_clases}>
				YEAR OF RELEASE
			</h2>
			<p className={text_clases}>
				{this.props.year_of_release}
			</p>
			<h2 className={subheading_clases}>
				GENRES
			</h2>
			<p className={text_clases}>
				{this.props.genres}
			</p>
			<h2 className={subheading_clases}>
				WHAT IT'S ALL ABOUT
			</h2>
			<p className={text_clases}>
				{this.props.what_its_all_about}
			</p>
		</div>
		</Fragment>
	)
	};
}
	
export default Game;

