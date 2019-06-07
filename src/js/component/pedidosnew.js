import ReactDOM from "react-dom";

import React, { Component } from "react";

import PropTypes from "prop-types";

import { Context } from "../store/appContext";

export class Pedidos2 extends React.Component {
	// hace un recorrido a "la lista de pedidos"//

	render() {
		return (
			<div>
				<h3 id="fondo6">PEDIDOS TOMADOS</h3>
				<Context.Consumer>
					{({ store, actions }) => {
						const listaMenu = store.tomados.map((item, index) => {
							return (
								<li id="fondo9" key={index}>
									<div className="collapsible-header">
										<i className={item.icono} />

										{item.name}
									</div>

									<div className="collapsible-body ">
										<span>
											<ul>
												<li>Categoria : {item.categoria}</li>

												<li>Precio : {item.precio}</li>

												<li>
													<a
														onClick={() => actions.borrarOrden(index)}
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
								<ul className="collapsible popout">{listaMenu}</ul>
							</div>
						);
					}}
				</Context.Consumer>
			</div>
		);
	}
}
