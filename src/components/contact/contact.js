import React from "react";
import { useState } from 'react';
import music4 from './music4.jpg';

export default function Form() {

// States for registration
const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');

// States for checking the errors
const [submitted, setSubmitted] = useState(false);
const [error, setError] = useState(false);

// Handling the name change
const handleName = (e) => {
	setName(e.target.value);
	setSubmitted(false);
};

// Handling the email change
const handleEmail = (e) => {
	setEmail(e.target.value);
	setSubmitted(false);
};

// Handling the password change
const handlePassword = (e) => {
	setPassword(e.target.value);
	setSubmitted(false);
};

// Handling the form submission
const handleSubmit = (e) => {
	e.preventDefault();
	if (name === '' || email === '' || password === '') {
	setError(true);
	} else {
	setSubmitted(true);
	setError(false);
	}
};

// Showing success message
const successMessage = () => {
	return (
	<div
		className="success"
		style={{
		display: submitted ? '' : 'none',
		}}>
		<h1>User {name} successfully registered!!</h1>
	</div>
	);
};

// Showing error message if error is true
const errorMessage = () => {
	return (
	<div
		className="error"
		style={{
		display: error ? '' : 'none',
		}}>
		<h1>Please enter all the fields</h1>
	</div>
	);
};

return (
	
	<div className="form">
		<div>
			<img
              class="img-fluid rounded mb-4 mb-lg-0"
              src={music4}
              alt=""
            />
          </div>
	<div>
		<h1>User Registration</h1>
	</div>

	{/* Calling to the methods */}
	<div className="messages">
		{errorMessage()}
		{successMessage()}
	</div>

	<form>
		{/* Labels and inputs for form data */}
		<label className="label">Name</label>
		<input onChange={handleName} className="input"
		value={name} type="text" />

		<label className="label">Email</label>
		<input onChange={handleEmail} className="input"
		value={email} type="email" />

		<label className="label">Password</label>
		<input onChange={handlePassword} className="input"
		value={password} type="password" />

		<button onClick={handleSubmit} className="btn" type="submit">
		Submit
		</button>
	</form>
	<div class="col-lg-5">
            <h1 class="font-weight-light">contact</h1>
            <p>
			Contact us</p>
			<p>               </p>
			<p>Reach out to us for any queries</p>
			<p>                  </p>
			<p>location_on:
			1st Floor, Beside Funnel Hill,
			Metro Pillar 63,
			Kukatpally, Hyderabad
			500091</p>
			<p>        </p>
			<p>call
			TollFree: 1800-3000-8484</p>
			<p>call
			Mobile : +91-8979XXX905</p>
			<p>mail
			sales@musicstores.in</p>
            
	</div>
	</div>
	
);
}

