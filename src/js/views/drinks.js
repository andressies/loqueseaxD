import ReactDOM from "react-dom";
import React, { Component } from "react";
import PropTypes from "prop-types";

export class Drinks extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			lista: [],

			menu1: [
				{
					name: "heineken",
					categoria: "cerveza",
					precio: "123123",
					imagen: "https://www.biernet.nl/images/merken/38870-heineken%20pilsener.jpg"
				},

				{
					name: "corona",
					categoria: "cerveza",
					precio: "123123",
					imagen: "http://www.elefete.com/wp-content/uploads/2018/05/cerveza-corona.jpg"
				},
				{
					name: "corona 2",
					categoria: "cerveza",
					precio: "12",
					imagen: "http://www.elefete.com/wp-content/uploads/2018/05/cerveza-corona.jpg"
				}
			]
		};
		this.agregar = this.agregar.bind(this);
		this.mostrar = this.mostrar.bind(this);
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

	render() {
		const listaMenu = this.state.menu1.map((item, index) => {
			return (
				<div className="row" key={index}>
					<div className="col s12 m6">
						<div className="card hoverable">
							<div className="card-image">
								<img id="heineken" src={item.imagen} />
								<span className="card-title">{item.name}</span>
								<a
									onClick={() => this.agregar(item)}
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
								Cervezas
							</a>
						</div>
						<div className="nav-content">
							<a
								onClick={this.mostrar}
								className="btn-floating btn-large halfway-fab waves-effect waves-light teal">
								<i className="material-icons fas fa-shopping-cart" />
							</a>
						</div>
					</nav>
				</div>
				{listaMenu}
			</div>
		);
	}
}
