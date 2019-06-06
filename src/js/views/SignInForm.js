import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { withRouter } from "react-router-dom";

class SignInForm extends Component {
	constructor(props) {
		super(props);

		this.state = {
			username: "",
			password: ""
		};
		this.algo = null;
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.goToSignUp = this.goToSignUp.bind(this);
	}
	goToSignUp() {
		var ul = document.getElementById("asd");
		console.log(ul);
		var instance = M.Tabs.getInstance(ul);
		instance.select("test2");
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
		console.log(this.props.history);
		this.algo.login(this.state.username, this.state.password, this.props.history);
	}

	render() {
		return (
			<Context.Consumer>
				{({ store, actions }) => {
					this.algo = actions;
					return (
						<div className="FormCenter">
							<form className="FormFields" onSubmit={this.handleSubmit}>
								<div className="FormField">
									<label className="FormField__Label" htmlFor="username">
										Username
									</label>
									<input
										type="username"
										id="username"
										className="FormField__Input"
										placeholder="Enter your username"
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
									<button className="FormField__Button mr-20 z-depth-5">Sign In</button>{" "}
									<a onClick={this.goToSignUp} className="FormField__Link">
										Create an account
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
SignInForm.propTypes = {
	history: PropTypes.any,
	router: PropTypes.any
};

export default withRouter(SignInForm);
