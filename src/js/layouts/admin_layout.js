import React, { Component } from "react";
import { Route } from "react-router-dom";
import PropTypes from "prop-types";
import { Navbar } from "../component/navbar.js";

const AdminLayout = ({ children }) => (
	<div>
		<Navbar />
		<div>
			<div>
				<br />
			</div>

			<div id="menu" className="row">
				<div className="col s3">
					<ul id="menu1" className="collection with-header ">
						<li className="collection-header #546e7a blue-grey darken-1">
							<h4>Menu</h4>
						</li>
						<li className="collection-item #90a4ae blue-grey lighten-2">
							<div>
								Users
								<a href="#!" className="secondary-content">
									<i className="material-icons fas fa-angle-right" />
								</a>
							</div>
						</li>
						<li className="collection-item #90a4ae blue-grey lighten-2">
							<div>
								Bartender
								<a href="#!" className="secondary-content">
									<i className="material-icons fas fa-angle-right" />
								</a>
							</div>
						</li>
						<li className="collection-item #90a4ae blue-grey lighten-2">
							<div>
								Carta
								<a href="#!" className="secondary-content">
									<i className="material-icons fas fa-angle-right" />
								</a>
							</div>
						</li>
						<li className="collection-item #90a4ae blue-grey lighten-2">
							<div>
								Mesas
								<a href="#!" className="secondary-content">
									<i className="material-icons fas fa-angle-right" />
								</a>
							</div>
						</li>
						<li className="collection-item #90a4ae blue-grey lighten-2">
							<div>
								Alvin
								<a href="#!" className="secondary-content">
									<i className="material-icons fas fa-angle-right" />
								</a>
							</div>
						</li>
						<li className="collection-item #90a4ae blue-grey lighten-2">
							<div>
								Alvin
								<a href="#!" className="secondary-content">
									<i className="material-icons fas fa-angle-right" />
								</a>
							</div>
						</li>
						<li className="collection-item #90a4ae blue-grey lighten-2">
							<div>
								Alvin
								<a href="#!" className="secondary-content">
									<i className="material-icons fas fa-angle-right" />
								</a>
							</div>
						</li>
					</ul>
				</div>
				<div className="asdasd col s9 ">{children}</div>
			</div>
		</div>

		<p>Este es ,mi footer</p>
	</div>
);

AdminLayout.propTypes = {
	children: PropTypes.any
};

const AdminLayoutRoute = ({ component: Component, ...rest }) => {
	return (
		<Route
			{...rest}
			render={matchProps => (
				<AdminLayout>
					<Component {...matchProps} />
				</AdminLayout>
			)}
		/>
	);
};

AdminLayoutRoute.propTypes = {
	component: PropTypes.any
};

export default AdminLayoutRoute;
