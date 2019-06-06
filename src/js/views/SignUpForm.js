import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { withRouter } from "react-router-dom";

class SignUpForm extends Component {
	constructor() {
		super();

		this.state = {
			first_name: "",
			last_name: "",
			username: "",
			email: "",
			password: "",
			hasAgreed: false
		};
		this.algo = null;
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.goToSignIn = this.goToSignIn.bind(this);
	}

	goToSignIn() {
		var ul = document.getElementById("asd");
		console.log(ul);
		var instance = M.Tabs.getInstance(ul);
		instance.select("test1");
	}
	handleChange(e) {
		let target = e.target;
		let value = target.type === "checkbox" ? target.checked : target.value;
		let name = target.name;

		this.setState({
			[name]: value
		});
	}

	handleSubmit(e) {
		e.preventDefault();

		console.log("The form was submitted with the following data:");
		this.algo.registerCliente(
			this.state.username,
			this.state.first_name,
			this.state.last_name,
			this.state.email,
			this.state.password,
			this.props.history
		);
	}

	render() {
		return (
			<Context.Consumer>
				{({ store, actions }) => {
					this.algo = actions;
					return (
						<div className="FormCenter">
							<form onSubmit={this.handleSubmit} className="FormFields">
								<div className="FormField">
									<label className="FormField__Label" htmlFor="first_name">
										First Name
									</label>
									<input
										type="text"
										id="first_name"
										className="FormField__Input"
										placeholder="Enter your first name"
										name="first_name"
										value={this.state.first_name}
										onChange={this.handleChange}
									/>
								</div>
								<div className="FormField">
									<label className="FormField__Label" htmlFor="last_name">
										Last Name
									</label>
									<input
										type="text"
										id="last_name"
										className="FormField__Input"
										placeholder="Enter your last name"
										name="last_name"
										value={this.state.last_name}
										onChange={this.handleChange}
									/>
								</div>
								<div className="FormField">
									<label className="FormField__Label" htmlFor="username">
										Username
									</label>
									<input
										type="text"
										id="username"
										className="FormField__Input"
										placeholder="Enter your Username"
										name="username"
										value={this.state.username}
										onChange={this.handleChange}
									/>
								</div>
								<div className="FormField">
									<label className="FormField__Label" htmlFor="password">
										Password
									</label>
									<input
										type="password"
										id="password"
										className="FormField__Input"
										placeholder="Enter your password"
										name="password"
										value={this.state.password}
										onChange={this.handleChange}
									/>
								</div>
								<div className="FormField">
									<label className="FormField__Label" htmlFor="email">
										E-Mail Address
									</label>
									<input
										type="email"
										id="email"
										className="FormField__Input"
										placeholder="Enter your email"
										name="email"
										value={this.state.email}
										onChange={this.handleChange}
									/>
								</div>

								<div className="FormField">
									<label className="FormField__CheckboxLabel">
										<input
											className="FormField__Checkbox"
											type="checkbox"
											name="hasAgreed"
											value={this.state.hasAgreed}
											onChange={this.handleChange}
										/>
										<span>
											I agree all statements in{" "}
											<a href="" className="FormField__TermsLink">
												terms of service
											</a>
										</span>
									</label>
								</div>

								<div className="FormField">
									<button className="FormField__Button mr-20 z-depth-5">Sign Up</button>{" "}
									<a onClick={this.goToSignIn} className="FormField__Link">
										Im already a member
									</a>
								</div>
							</form>
						</div>
					);
				}}
			</Context.Consumer>
		);
	}
}
SignUpForm.propTypes = {
	history: PropTypes.any,
	router: PropTypes.any
};
export default withRouter(SignUpForm);
