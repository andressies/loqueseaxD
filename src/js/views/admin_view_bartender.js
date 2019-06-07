import ReactDOM from "react-dom";
import React, { Component } from "react";
import PropTypes from "prop-types";
import { Navbar } from "../component/navbar.js";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import M from "materialize-css";

export class AdminViewBartenders extends React.Component {
	componentDidMount() {
		M.AutoInit();
	}
	render() {
		return (
			<Context.Consumer>
				{({ store, actions }) => {
					const listaBartenders = store.bartenders.map((item, index) => {
						return (
							<div key={index} id="card_cliente" className="card col s4 m4 l4 hoverable">
								<div id="card_cliente_img" className="card-image waves-effect waves-block waves-light">
									<img
										id="user_cliente_img"
										className="activator"
										src="http://sanjuanbautista.edu.co/academico/cPanel/documentos/images/user.png"
									/>
								</div>
								<div className="card-content">
									<span className="card-title activator grey-text text-darken-4">
										{item.name} {item.lastName}
										<i className="material-icons left fas fa-ellipsis-v" />
									</span>
									<p>
										<i
											onClick={() => actions.borrarBartender(index)}
											className="material-icons right fas fa-trash-alt"
										/>
									</p>
								</div>
								<div className="card-reveal">
									<span className="card-title grey-text text-darken-4">
										{item.name} {item.lastName}
										<i className="material-icons right fas fa-times" />
									</span>
									<ul>
										<li className="collection-item">FirstName: {item.name}</li>
										<li className="collection-item">LastName: {item.lastName}</li>
										<li className="collection-item">age: {item.age}</li>
										<li className="collection-item">email: {item.email}</li>
									</ul>
								</div>
							</div>
						);
					});
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
										<Link to="/clientes">
											<i className="material-icons fas fa-users" />
											Users
										</Link>
									</li>
									<li>
										<a href="#!">
											<Link to="/user_bartender">
												<i className="fas fa-user-tie" />
												Bartender
											</Link>
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
													<Link to="/carta">
														<span>Cervezas</span>
													</Link>
												</li>
												<li>
													<Link to="/cartaVinos">
														<span>Vinos</span>
													</Link>
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
							<div className="row">
								<div>{listaBartenders}</div>
								<div id="card_cliente" className="card col s4 m4 l4 hoverable">
									<div
										id="card_cliente_img"
										className="card-image waves-effect waves-block waves-light">
										<Link to="/register/view">
											<img
												id="user_cliente_img"
												className="activator"
												src="https://img.icons8.com/cotton/2x/plus--v1.png"
											/>
										</Link>
									</div>
									<div className="card-content">
										<span className="card-title activator grey-text text-darken-4">
											Agregar Bartender
										</span>
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
