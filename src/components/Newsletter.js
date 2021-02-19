import React, {Fragment} from 'react';
import axios from 'axios';
import Form, { Input, useValidation, useForm } from "usetheform";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import newletter_image from '../images/staytuned.png';
import dots_image from '../images/dots.png';

const FormStyle = "text-center max-w-full xl:mx-20";
const labelErrStyle = "alert-danger p-3 m-3 rounded";
const inputStyle = "appearance-none mt-5 text-md md:text-2xl fw-300 text-center font-in-input-pink w-4/5 px-3 py-1 xl:p-5 mb-10 focus:outline-none focus:bg-gray-800 bg-gray-800 rounded-full font-in-border-blue border-4 tracking-widest";
const buttonStyle = "hover:bg-blue-300 hover:text-white xl:text-5xl text-2xl text-blue-400 tracking-track-02 xl:px-8 px-4 py-2 mx-auto mb-10 -my-5 text-center lato fw-700 font-in-border-blue border-2 cursor-pointer";


const isValidEmail = value =>
    !(value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value))
        ? undefined
        : 'Email is not valid. Please try again.'

const requried =  value => value && value.trim() !== '' ? undefined : 'Requried *'

const Newsletter  = () => {
	const [statusInput, validationAttrInput] = useValidation([requried, isValidEmail]);
	const customId = "custom-id-yes";

	const EmailCatch = (value) => {
        if (useValidation) {
            console.info("Valid Form");
            const email = JSON.parse(JSON.stringify(value.email));
            let config = {
                headers: {
                    'accept': 'application/json',
                    'content-type': 'application/json',
                }
            }
            axios.post('https://webhook.site/54845475-247c-457a-be6e-6a82e3a9a50d', email, config)
            .then(response => {
                console.log('Result', response)
				toast.success('Thank you for joining our newsletter! \n\nEmail submited: ' + value.email, {
					toastId: customId
				});
            })
            .catch(error => {
                console.log('Error', error)
				toast.error('This email was not added to the newletter list. Please try again. \n\n Or contact us at \n\n earthlings@inverted-mountain.com');
            })
        } else {
        console.error("Invalid Form");
		toast.error('This email was not added to the newletter list. Please try again. \n\n Or contact us at \n\n earthlings@inverted-mountain.com');
        }
    }
		const contextClass = {
			success: "bg-blue-400",
			error: "bg-red-600",
		  };

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
				toastClassName={({ type }) => contextClass[type || "default"] + " whitespace-pre-line flex p-3 min-h-10 lato fw-400 rounded-md justify-between cursor-pointer"}
				bodyClassName={() => "text-xl w-full font-white p-3"}
				/>

				<Form className={FormStyle} initialState={{ email: '' }} onSubmit={(state) => EmailCatch(state)}>
					{statusInput.error && <label className={labelErrStyle}>{statusInput.error}</label>}
					<Input placeholder="enter your email here" className={inputStyle} type="text" name="email" touched {...validationAttrInput} />
	
					<Submit />
				</Form>
			</section>
			</Fragment>
			)
		 	//End of return
		}

const Submit = (value) => {
	const { isValid } = useForm();
	return (
		<button className={buttonStyle} disabled={!isValid} type="submit" 
				id="SubmitBtn">
				SUBSCRIBE
		</button>	
		)
};
 	
export default Newsletter;