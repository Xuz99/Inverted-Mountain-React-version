import React, {Component, Fragment} from 'react';
import newletter_image from '../images/staytuned.png';

class Newsletter extends Component  {
	constructor(props) {
		super(props);
		
		this.state = {value: ''};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
		this.setState({value: event.target.value});
	}

	handleSubmit(event) {
		alert('Email submited: ' + this.state.value);
		event.preventDefault();
	}	

	async postEmail(){
		try {
			const emailCatch = this.state

			let result = await fetch('https://webhook.site/711509ee-484d-4c76-b41d-ce9f2ed0973a', {
				method: 'post',
				mode: 'no-cors',
				headers: {
					'Accept': 'application/json',
					'Content-type': 'application/json',
				},
				body: JSON.stringify({
					email: emailCatch
				})
			});

			console.log('Result', result)

		} catch(error) {
			console.log(error)
		}

	}

	render() {
		return(
			<Fragment>
			<section className="flex-auto max-w-full border font-in-border-blue border-current xl:mx-64 mx-1">
			<div className="text-center tracking-tiny-wide ">
			<img className="mx-auto my-10" src={newletter_image} alt="A man or alien beaming out the ether"/>
			<h2 className="text-4xl xl:text-6xl font-in-blue whitespace-normal">STAY TUNED</h2>
			<h3 className="text-xl xl:text-4xl font-in-subtitle-blue">with our newsether</h3>
			<br/>
			<span className="text-xl xl:text-3xl font-in-blue" role="img" aria-labelledby="3 seperating dots of ether">⚫ ⚫ ⚫</span>
			<br/>
			<br/>
			</div>

			<form className="text-center max-w-full xl:mx-20"
			onSubmit={this.handleSubmit}
			>
			<input className="appearance-none text-md xl:text-2xl text-center font-in-input-pink w-4/5 p-3 xl:p-5 mb-10 focus:outline-none focus:bg-gray-800 bg-gray-800 rounded-full font-in-border-blue border-4 tracking-track-02" 
			id="emailCatch" 
			type="email" 
			name="email" 
			placeholder="enter your email here"
			value={this.state.value}
			onChange={this.handleChange} 
			></input>
			<br/>

			<button className="hover:bg-blue-300 hover:text-white xl:text-5xl text-2xl text-blue-400 font-bold xl:px-8 px-4 py-2 mx-auto mb-10 -my-5 text-center lato fw-700 font-in-border-blue border-2 tracking-tiny-wide cursor-pointer" 
			id="SubmitBtn"
			onClick={ () => this.postEmail() }>SUBSCRIBE</button>
			</form>
			</section>
			</Fragment>
			)
		 	//End of return
		 }
 		//End of render
 	}
 	

 	export default Newsletter