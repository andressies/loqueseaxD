import React from "react";
import { Link } from "react-router-dom";

export class Navbar extends React.Component {
	render() {
		return (
			<div>
				<ul id="dropdown1" className="dropdown-content ">
					<li>
						<a href="#!">one</a>
					</li>
					<li>
						<a href="#!">two</a>
					</li>
					<li className="divider" />
					<li>
						<a href="#!">Cerrar sesion</a>
					</li>
				</ul>
				<nav className="navbar_admin_view #546e7a blue-grey darken-1">
					<div className="nav-wrapper">
						<a href="#" data-target="slide-out" className="sidenav-trigger ">
							<img
								className="button_menu hoverable  valign-wrapper"
								src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1200px-Hamburger_icon.svg.png"
							/>
						</a>
						<ul className="right hoverable ">
							<li>
								<a className="dropdown-trigger " href="#!" data-target="dropdown1">
									<i className="material-icons right">
										<i className="fas fa-cog" />
									</i>
								</a>
							</li>
						</ul>
					</div>
				</nav>
			</div>
		);
	}
}
