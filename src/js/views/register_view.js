import ReactDOM from "react-dom";
import React, { Component } from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";

export class RegisterView extends React.Component {
	render() {
		return (
			<Context.Consumer>
				{({ store, actions }) => {
					return (
						<div>
							<a
								href="javascript:history.go(-1)"
								className="btn-floating btn-large waves-effect waves-light red">
								<i className="fas fa-arrow-left" />
							</a>
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
															<form onSubmit={actions.handleSubmit} className="col s12">
																<div className="row">
																	<div className="input-field col s12">
																		<input
																			id="name"
																			type="text"
																			className="validate"
																			name="name"
																			value={store.name}
																			onChange={actions.handleprueba}
																			placeholder="name"
																		/>
																		<label htmlFor="username">Username</label>
																	</div>
																</div>
																<div className="row">
																	<div className="input-field col s6">
																		<input
																			id="first_name"
																			type="text"
																			className="validate"
																			name="first_name"
																			value={store.first_name}
																			onChange={actions.handleprueba}
																			placeholder="first_name"
																		/>
																		<label htmlFor="first_name">First Name</label>
																	</div>
																	<div className="input-field col s6">
																		<input
																			id="last_name"
																			type="text"
																			className="validate"
																			name="last_name"
																			value={store.last_name}
																			onChange={actions.handleprueba}
																			placeholder="last_name"
																		/>
																		<label htmlFor="last_name">Last Name</label>
																	</div>
																</div>

																<div className="row">
																	<div className="input-field col s12">
																		<input
																			id="password"
																			type="password"
																			className="validate"
																			name="password"
																			value={store.password}
																			onChange={actions.handleprueba}
																			placeholder="password"
																		/>
																		<label htmlFor="password">Password</label>
																	</div>
																</div>
																<div className="row">
																	<div className="input-field col s12">
																		<input
																			id="email"
																			type="email"
																			className="validate"
																			name="email"
																			value={store.email}
																			onChange={actions.handleprueba}
																			placeholder="email"
																		/>
																		<label htmlFor="email">Email</label>
																	</div>
																</div>
															</form>
															<a
																onClick={() => actions.enviarBartender()}
																className="waves-effect waves-green btn">
																Registrar
															</a>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					);
				}}
			</Context.Consumer>
		);
	}
}
