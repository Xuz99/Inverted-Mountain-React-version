import React, {Component, Fragment} from 'react';
import newletter_image from '../images/staytuned.png';
import dots_image from '../images/dots.png';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const validEmailRegex = RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);

const validateForm = errors => {
	let valid = true;
	Object.values(errors).forEach(
	  // if we have an error string set valid to false
	  val => val.length > 0 && (valid = false)
	);
	return valid;
  };

class Newsletter extends Component  {
	constructor(props) {
		super(props);
		
		this.state = {email: null, errors: {email: "",}};
 
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	

	handleChange = event => {
		event.preventDefault();
		const { name, value } = event.target;
		let errors = this.state.errors; 

		switch (name) {
		  case "email":
			errors.email = validEmailRegex.test(value) ? "" : "Email is not valid!";
			break;
		  default:
			break;
		}
		this.setState({ errors, [name]: value });
	  };

	handleSubmit = event => {
		event.preventDefault();
		if (validateForm(this.state.errors)) {
			
		  toast.success('Thank you for joining our newsletter! \n\nEmail submited: ' + this.state.email + '\n\nThis email will not be added to the newletter system');
		  console.info("Valid Form");
			async postEmail() {
				try {
					const emailCatch = this.state
		
					let result = await fetch('https://webhook.site/54845475-247c-457a-be6e-6a82e3a9a50d', {
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
					toast.error('This email was not added to the newletter list. Please try again. Or contact us at ...');
				}
		
			};
		} else {
		  console.error("Invalid Form");
		}
	  };

	  

	

	render() {
		const { errors } = this.state;
		return(
			<Fragment>
			<section className="mt-56 border font-in-border-blue border-current xl:mx-64 mx-1">
				<div className="text-center">
					<img className="mx-auto my-10 w-64 sm:w-auto" src={newletter_image} alt="A man or alien beaming out the ether"/>
					<h2 className="text-4xl xl:text-6xl font-in-blue tracking-widest">STAY TUNED</h2>
					<h3 className="text-xl xl:text-4xl font-in-subtitle-blue tracking-widest">with our newsether</h3>
					<img src={dots_image} className="text-xl xl:text-3xl mx-auto my-10" alt="3 seperating dots of ether"/>
				</div>

				<ToastContainer 
					position="top-center"
					autoClose={5000}
					hideProgressBar={true}
					newestOnTop={false}
					closeOnClick
					rtl={false}
					pauseOnFocusLoss
					draggable
					pauseOnHover
					toastClassName={() => "whitespace-pre-line bg-blue-400 flex p-3 min-h-10 lato fw-400 font-in-border-blue border-2 rounded-md justify-between cursor-pointer"}
					bodyClassName={() => "text-xl w-full font-white p-3"}
					/>

				<form noValidate className="text-center max-w-full xl:mx-20"
				onSubmit={this.handleSubmit}>
					
				{errors.email.length > 0 && (
					<label htmlfor="email" className="alert-danger p-3 m-3 rounded">{errors.email}</label>
				)}
					

				<input className="appearance-none mt-5 text-md md:text-2xl fw-300 text-center font-in-input-pink w-4/5 px-3 py-1 xl:p-5 mb-10 focus:outline-none focus:bg-gray-800 bg-gray-800 rounded-full font-in-border-blue border-4 tracking-widest" 
				id="emailCatch" 
				type="email" 
				name="email" 
				placeholder="enter your email here"
				onChange={this.handleChange}
				noValidate
				></input>

				<button className="hover:bg-blue-300 hover:text-white xl:text-5xl text-2xl text-blue-400 tracking-track-02 xl:px-8 px-4 py-2 mx-auto mb-10 -my-5 text-center lato fw-700 font-in-border-blue border-2 cursor-pointer" 
				id="SubmitBtn">SUBSCRIBE</button>
				</form>

			</section>
			</Fragment>
			)
		 	//End of return
		 }
 		//End of render
 	}
 	
 	export default Newsletter;