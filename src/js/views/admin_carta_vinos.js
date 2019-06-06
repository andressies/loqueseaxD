import ReactDOM from "react-dom";
import React, { Component } from "react";
import PropTypes from "prop-types";
import { Navbar } from "../component/navbar.js";
import { Context } from "../store/appContext";

export class CartaVinos extends React.Component {
	render() {
		return (
			<Context.Consumer>
				{({ store, actions }) => {
					const CartaVinos = store.menuvinos.map((item, index) => {
						return (
							<div className="col s12 m3" key={index}>
								<div className="">
									<div className="card hoverable">
										<div className="card-image">
											<img id="heineken" src={item.imagen} />
											<span className="card-title">{item.name}</span>
											<a
												onClick={() => actions.borrarCartaVinos(index)}
												className="btn-floating halfway-fab waves-effect waves-light red">
												<i className="material-icons fas fa-trash-alt" />
											</a>
										</div>
										<div className="card-content">
											<h4> Precio : {item.precio}</h4>
										</div>
									</div>
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
							<div className="row">
								<div>{CartaVinos}</div>
								<div id="card_agregar" className="card col s4 m4 l4 hoverable">
									<div
										id="card_agregar_trago"
										className="card-image waves-effect waves-block waves-light">
										<img
											onClick={() => actions.agregarVinoCarta()}
											id="agregar_trago"
											className="activator"
											src="https://img.icons8.com/cotton/2x/plus--v1.png"
										/>
									</div>
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
														onChange={actions.agregarVino}
														placeholder="name"
													/>
													<label htmlFor="name">Name</label>
													<span
														className="helper-text"
														data-error="wrong"
														data-success="right"
													/>
												</div>
												<div className="input-field col s12">
													<input
														id="precio"
														type="text"
														className="validate"
														name="precio"
														value={store.precio}
														onChange={actions.agregarVino}
														placeholder="precio"
													/>
													<label htmlFor="precio">Precio</label>
													<span
														className="helper-text"
														data-error="wrong"
														data-success="right"
													/>
												</div>
												<div className="input-field col s12">
													<input
														id="linkImg"
														type="text"
														className="validate"
														name="imagen"
														value={store.imagen}
														onChange={actions.agregarVino}
														placeholder="linkImg"
													/>
													<label htmlFor="linkimg">Link img</label>
													<span
														className="helper-text"
														data-error="wrong"
														data-success="right"
													/>
												</div>
											</div>
										</form>
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
