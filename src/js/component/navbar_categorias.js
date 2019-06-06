import React from "react";
import { Link } from "react-router-dom";

export default class Navbar3 extends React.Component {
	render() {
		return (
			<div id="nav_cervezas">
				<nav className="nav-extended sticky-top">
					<div className="nav-wrapper">
						<a
							href="https://proyecto-bar--andressies.c9users.io/categorias/view"
							className="btn-floating btn-large waves-effect waves-light red">
							<i className="fas fa-arrow-left" />
						</a>
						<a href="#!" className="brand-logo">
							Cervezas
						</a>
					</div>
					<div className="nav-content">
						<a className="btn-floating btn-large halfway-fab waves-effect waves-light teal">
							<i className="material-icons fas fa-shopping-cart" />
						</a>
					</div>
				</nav>
			</div>
		);
	}
}
