import ReactDOM from "react-dom";
import React, { Component } from "react";
import PropTypes from "prop-types";

import { menu1 } from "./menu_1.json";
import { menu2 } from "./menu_2.json";

export class Carrito extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			lista: [],

			menu1,
			menu2
		};
		this.agregar = this.agregar.bind(this);
		this.mostrar = this.mostrar.bind(this);
		this.borrar = this.borrar.bind(this);
	}
	agregar(item) {
		const tmp = this.state.lista;
		tmp.push(item);
		this.setState({ lista: tmp });
		console.log(item);
	}
	mostrar() {
		console.log(this.state.lista);
	}
	borrar(index) {
		console.log(index);
	}

	render() {
		const listaMenu = this.state.menu1.map((item, index) => {
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
										onClick={() => this.borrar(item)}
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

					<a id="enviar" className="waves-effect waves-light btn col s6">
						Enviar
					</a>
				</div>
			</div>
		);
	}
}
