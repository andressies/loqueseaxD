import ReactDOM from "react-dom";
import React, { Component } from "react";
import PropTypes from "prop-types";
import { Navbar } from "../component/navbar.js";
import { Context } from "../store/appContext";

export class AdminView extends React.Component {
	render() {
		return (
			<Context.Consumer>
				{({ store, actions }) => {
					return (
						<div id="general_admin_view">
							<Navbar />
							<div>
								<br />
							</div>
							<div>
								<ul id="slide-out" className="sidenav">
									<li>
										<div className="user-view">
											<div className="background">
												<img
													id="img_menu"
													src="https://cdn.buenosairesconnect.com/wp-content/uploads/2017/08/presidente-boost.jpg"
												/>
											</div>
											<a href="#user">
												<img
													className="circle hoverable"
													src="https://miabogadoenlinea.net/images/Jack%20Sparrow.jpg"
												/>
											</a>
											<a href="#name">
												<span className="white-text name">Jack Sparrow</span>
											</a>
											<a href="#email">
												<span className="white-text email">jSparrow@gmail.com</span>
											</a>
										</div>
									</li>
									<li>
										<a className="subheader">Menu</a>
									</li>
									<div className="divider" />
									<li>
										<a href="https://proyecto-bar--andressies.c9users.io/clientes">
											<i className="material-icons fas fa-users" />
											Users
										</a>
									</li>
									<li>
										<a href="https://proyecto-bar--andressies.c9users.io/user_bartender">
											<i className="fas fa-user-tie" />
											Bartender
										</a>
									</li>

									<li>
										<a href="#!">
											{" "}
											<i className="fas fa-book-open" />
											Carta
										</a>
									</li>

									<ul className="collapsible">
										<li>
											<div className="collapsible-header">
												<i className="material-icons fas fa-book-open" />
												Carta
											</div>
											<div className="collapsible-body">
												<li>
													<a href="https://proyecto-bar--andressies.c9users.io/carta">
														<span>Cervezas</span>
													</a>
												</li>
												<li>
													<a href="https://proyecto-bar--andressies.c9users.io/cartaVinos">
														<span>Vinos</span>
													</a>
												</li>
											</div>
										</li>
									</ul>

									<li>
										<a href="#!">
											<i className="fas fa-couch" />
											Mesas
										</a>
									</li>
									<li>
										<div className="divider" />
									</li>
									<li>
										<a className="subheader">Finanzas</a>
									</li>
									<li>
										<a className="waves-effect" href="#!">
											promociones
										</a>
									</li>
									<li>
										<a className="waves-effect" href="#!">
											inventario
										</a>
									</li>
									<li>
										<a className="waves-effect" href="#!">
											ventas
										</a>
									</li>
									<div className="divider" />

									<li>
										<a className="waves-effect" href="#!">
											cerrar sesion
										</a>
									</li>
								</ul>
							</div>
						</div>
					);
				}}
			</Context.Consumer>
		);
	}
}
