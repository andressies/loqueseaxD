import ReactDOM from "react-dom";
import React, { Component } from "react";
import PropTypes from "prop-types";
import { Navbar } from "../component/navbar.js";

export class AdminView extends React.Component {
	render() {
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
						<li>
							<a href="#!">
								<i className="material-icons fas fa-users" />
								Users
							</a>
						</li>
						<li>
							<a href="#!">Bartender</a>
						</li>
						<li>
							<a href="#!">Carta</a>
						</li>
						<li>
							<a href="#!">Mesas</a>
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
					</ul>
					<a href="#" data-target="slide-out" className="sidenav-trigger">
						<img
							className="button_menu"
							src="https://cdn4.iconfinder.com/data/icons/circles-1/32/364-01-512.png"
						/>
					</a>

					<div className="asdasd col s9  " />
				</div>
			</div>
		);
	}
}
