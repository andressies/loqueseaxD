import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";

export class Home extends React.Component {
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
		);
	}
}
