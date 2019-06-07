import ReactDOM from "react-dom";
import React, { Component } from "react";
import PropTypes from "prop-types";
import M from "materialize-css";

import { Context } from "../store/appContext";

export class Carrito extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	componentDidMount() {
		// Auto initialize all the things!
		M.AutoInit();
	}

	// hace un recorrido a "la lista de pedidos"//
	render() {
		return (
			<Context.Consumer>
				{({ store, actions }) => {
					const listaMenu = store.Carrito.map((item, index) => {
						return (
							<li key={index}>
								<div className="collapsible-header">
									<i className={item.icono} />
									{item.name}
								</div>

								<div className="collapsible-body ">
									<span>
										<ul>
											<li>Categoria : {item.categoria}</li>
											<li>Precio : ${item.precio}</li>
											<li>
												<a
													onClick={() => actions.borrarCarrito(index)}
													id="carrito_eliminar"
													className="waves-effect waves-light btn">
													<i className="fas fa-trash-alt" />
												</a>
											</li>
										</ul>
									</span>
								</div>
							</li>
						);
					});
					return (
						<div>
							<div id="nav_cervezas">
								<nav className="nav-extended sticky-top">
									<div className="nav-wrapper">
										<a
											href="javascript:history.go(-1)"
											className="btn-floating btn-large waves-effect waves-light red">
											<i className="fas fa-arrow-left" />
										</a>
										<a href="#!" className="brand-logo">
											Carrito
										</a>
									</div>
								</nav>
							</div>
							<div className="row">
								<ul className="collapsible popout">{listaMenu}</ul>
								<a
									onClick={() => actions.enviar()}
									id="enviar"
									className="waves-effect waves-light btn col s6 m6 l6">
									Pagar
								</a>
							</div>
						</div>
					);
				}}
			</Context.Consumer>
		);
	}
}
