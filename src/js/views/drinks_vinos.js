import ReactDOM from "react-dom";
import React, { Component } from "react";
import PropTypes from "prop-types";

export class DrinksVinos extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			lista: [],

			menu1: [
				{
					name: "juguito de uva",
					categoria: "vino",
					precio: "123123",
					imagen:
						"https://cdn.shopify.com/s/files/1/2196/9115/articles/shutterstock_562243966-1_2048x.jpg?v=1534175641"
				},

				{
					name: "asdasd",
					categoria: "vino",
					precio: "123123",
					imagen: "https://publiko.mx/wp-content/uploads/2019/02/vino.jpg"
				},
				{
					name: "corona 2",
					categoria: "vino",
					precio: "12",
					imagen: "http://www.elefete.com/wp-content/uploads/2018/05/cerveza-corona.jpg"
				}
			]
		};
		this.agregar = this.agregar.bind(this);
	}
	agregar(item) {
		this.state.lista.push(item);
		console.log(item);
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
			</div>
		);
	}
}
