import ReactDOM from "react-dom";
import React, { Component } from "react";
import PropTypes from "prop-types";

import { menu1 } from "./menu_1.json";
import { menu2 } from "./menu_2.json";
import { Context } from "../store/appContext";

export class DrinksVinos extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			lista: [],

			menu2
		};
		this.agregar = this.agregar.bind(this);
	}
	//agrega y guarda en una nueva lista//
	agregar(item) {
		const tmp = this.state.lista;
		tmp.push(item);
		this.setState({ lista: tmp });
		console.log(item);
	}
	//recorre la lista y rellena card con los datos que se solicitan en la lista//
	render() {
		return (
			<Context.Consumer>
				{({ store, actions }) => {
					const listaMenu = store.menuvinos.map((item, index) => {
						return (
							<div className="row" key={index}>
								<div className="col s12 m6">
									<div className="card hoverable">
										<div className="card-image">
											<img id="heineken" src={item.imagen} />
											<span className="card-title">{item.name}</span>
											<a
												onClick={() => actions.agregar(item)}
												className="btn-floating halfway-fab waves-effect waves-light red">
												<i className="material-icons fas fa-shopping-cart" />
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
											Vinos
										</a>
									</div>
									<div className="nav-content">
										<a className="btn-floating btn-large halfway-fab waves-effect waves-light teal">
											<i className="material-icons fas fa-shopping-cart" />
										</a>
									</div>
								</nav>
							</div>
							{listaMenu}
							<button onClick={() => actions.test()}> </button>;
						</div>
					);
				}}
			</Context.Consumer>
		);
	}
}
