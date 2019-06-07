import React, { Component } from "react";
import PropTypes from "prop-types";

import { Context } from "../store/appContext";

export class ListadoPedidos extends React.Component {
	// hace un recorrido a "la lista de pedidos"//

	render() {
		return (
			<div>
				<h3 id="fondo7">LISTA DE PEDIDOS</h3>
				<Context.Consumer>
					{({ store, actions }) => {
						const listaMenu = store.pedidos.map((item, index) => {
							return (
								<li id="fondo7" key={index}>
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
													<a
														onClick={() => actions.tomarPedido(item)}
														id="carrito_eliminar"
														className="waves-effect waves-light btn">
														<i className="fas fa-share" />
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
