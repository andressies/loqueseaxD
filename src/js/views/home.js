import React from "react";
import { HashRouter as Router, Route, Link, NavLink } from "react-router-dom";
import SignUpForm from "./SignUpForm";
import SignInForm from "./SignInForm";
import "../../styles/Login.scss";

export class Home extends React.Component {
	render() {
		return (
			<Router basename="/react-auth-ui/">
				<div className="App">
					<div className="App__Aside" />
					<div className="App__Form">
						<div className="PageSwitcher ">
							<div className=" PageSwitcher__Item z-depth-4" style={{ padding: 0 }}>
								<NavLink
									to="/sign-in"
									activeClassName="PageSwitcher__Item--Active"
									className="PageSwitcher__Item ">
									Sign In
								</NavLink>
								<NavLink
									exact
									to="/"
									activeClassName="PageSwitcher__Item--Active"
									className="PageSwitcher__Item">
									Sign Up
								</NavLink>
							</div>
						</div>

						<div className="FormTitle">
							<NavLink
								to="/sign-in"
								activeClassName="FormTitle__Link--Active"
								className="FormTitle__Link">
								Sign In
							</NavLink>{" "}
							or{" "}
							<NavLink exact to="/" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">
								Sign Up
							</NavLink>
						</div>

						<Route exact path="/" component={SignUpForm} />
						<Route path="/sign-in" component={SignInForm} />
					</div>
				</div>
			</Router>

			/************ Login antiguo
			<div className="valign-wrapper layout-external center-align ">
				<div className="row content-le">
					<div className="col s12 m6 offset-m3 l4 offset-l4">
						<div id="card_login" className="card hoverable #f1f8e9 light-green lighten-5">
							<div className="card-content ">
								<div className="row">
									<div className="col s12">
										<img
											className="user_login_img"
											src="https://image.flaticon.com/icons/png/512/993/993222.png"
											height="100"
											width="100"
										/>
									</div>
									<div className="col s12">
										<form className="row">
											<div className="input-field col s12">
												<i className="fas fa-user prefix" />
												<input id="icon_prefix" type="text" className="validate" />
												<label id="text_color_input" htmlFor="icon_prefix">
													User
												</label>
											</div>
											<div className="input-field col s12 ">
												<i className="fas fa-lock prefix" />
												<input id="icon_prefix" type="password" className="validate" />
												<label id="text_color_input" htmlFor="icon_prefix">
													Password
												</label>
											</div>
											<div className="input-field left-align col s12 ">
												<p className="col s6 ">
													<label>
														<input
															type="checkbox"
															className="filled-in "
															defaultChecked="checked"
														/>
														<span>Remember me</span>
													</label>
												</p>
												<p className="check_admin_user right-align col s6">
													<label>
														<input
															type="checkbox"
															className="filled-in "
															defaultChecked="checked"
														/>
														<span>Admin User</span>
													</label>
												</p>
											</div>
											<a className="btn-floating btn-large pulse waves-effect waves-green">
												<i className="material-icons fas fa-sign-in-alt" />
											</a>
										</form>
										<a className="right">registrarse</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			*/ ///////
		);
	}
}
