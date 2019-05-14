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
						<a href="#!" className="brand-logo ">
							<img
								className=""
								src="https://cdn.iconscout.com/icon/free/png-256/account-profile-avatar-man-circle-round-user-30452.png"
								height="60"
								width="60"
							/>
							User
						</a>
						<ul className="right ">
							<li>
								<a className="dropdown-trigger" href="#!" data-target="dropdown1">
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
