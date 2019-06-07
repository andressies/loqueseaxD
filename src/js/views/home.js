import React from "react";
import { HashRouter as Router, Route, Link, NavLink } from "react-router-dom";
import SignUpForm from "./SignUpForm";
import SignInForm from "./SignInForm";
import "../../styles/login.scss";

export class Home extends React.Component {
	render() {
		return (
			<div className="App">
				<div className="App__Aside" />
				<div className="App__Form">
					<div className="row">
						<div className="col s10">
							<ul id="asd" className="tabs">
								<li className="tab col s3">
									<a href="#test1">Sign In</a>
								</li>
								<li className="tab col s3">
									<a className="active" href="#test2">
										Sign Up
									</a>
								</li>
							</ul>
						</div>
						<div id="test1" className="col s12">
							<SignInForm />
						</div>
						<div id="test2" className="col s12">
							<SignUpForm />
						</div>
					</div>
				</div>
			</div>
			/********Login With Route
			<Router>
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
											<div className="input-field left-align col s12 m12 l12">
												<div className=" left-align col s6 m6 l6">
													<p className="">
														<label>
															<input
																type="checkbox"
																className="filled-in  "
																defaultChecked="checked"
															/>
															<span>Remember me</span>
														</label>
													</p>
												</div>
												<div className=" right-align col s6 m6 l6">
													<div>
														<p className="check_admin_user  ">
															<label>
																<input
																	id="adminUser"
																	type="checkbox"
																	className="filled-in left-align "
																	defaultChecked="checked"
																/>
																<span>Admin User</span>
															</label>
														</p>
													</div>
													<div>
														<p className="check_bartender_user  ">
															<label>
																<input
																	type="checkbox"
																	className="filled-in left-align "
																	defaultChecked="checked"
																/>
																<span>Bartender </span>
															</label>
														</p>
													</div>
												</div>
											</div>

											<a className="btn-floating btn-large pulse waves-effect waves-green">
												<i className="material-icons fas fa-sign-in-alt" />
											</a>
										</form>
										<a
											href="https://proyecto-bar--andressies.c9users.io/register/view"
											className="right">
											registrarse
										</a>
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
