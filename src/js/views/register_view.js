import ReactDOM from "react-dom";
import React, { Component } from "react";
import PropTypes from "prop-types";

export class RegisterView extends React.Component {
	render() {
		return (
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
										<div className="row">
											<form className="col s12">
												<div className="row">
													<div className="input-field col s6">
														<input id="first_name" type="text" className="validate" />
														<label htmlFor="first_name">First Name</label>
													</div>
													<div className="input-field col s6">
														<input id="last_name" type="text" className="validate" />
														<label htmlFor="last_name">Last Name</label>
													</div>
												</div>

												<div className="row">
													<div className="input-field col s12">
														<input id="password" type="password" className="validate" />
														<label htmlFor="password">Password</label>
													</div>
												</div>
												<div className="row">
													<div className="input-field col s12">
														<input id="email" type="email" className="validate" />
														<label htmlFor="email">Email</label>
													</div>
												</div>
											</form>
											<a className="waves-effect waves-green btn">Registrarse</a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
