import ReactDOM from "react-dom";
import React, { Component } from "react";
import PropTypes from "prop-types";
import { Navbar } from "../component/navbar.js";

export class AdminView extends React.Component {
	render() {
		return (
			<div>
				<Navbar />
				<div>
					<br />
				</div>

				<div id="menu" className="row ">
					<div className="col s3">
						<ul id="menu1" className="collection with-header hoverable ">
							<li className="collection-header #546e7a blue-grey darken-1 hoverable ">
								<h4>Menu</h4>
							</li>
							<li className="collection-item #90a4ae blue-grey lighten-2 hoverable ">
								<div>
									Users
									<a href="#!" className="secondary-content">
										<i className="material-icons fas fa-angle-right " />
									</a>
								</div>
							</li>
							<li className="collection-item #90a4ae blue-grey lighten-2 hoverable">
								<div>
									Bartender
									<a href="#!" className="secondary-content">
										<i className="material-icons fas fa-angle-right" />
									</a>
								</div>
							</li>
							<li className="collection-item #90a4ae blue-grey lighten-2 hoverable">
								<div>
									Carta
									<a href="#!" className="secondary-content">
										<i className="material-icons fas fa-angle-right" />
									</a>
								</div>
							</li>
							<li className="collection-item #90a4ae blue-grey lighten-2 hoverable">
								<div>
									Mesas
									<a href="#!" className="secondary-content">
										<i className="material-icons fas fa-angle-right" />
									</a>
								</div>
							</li>
							<li className="collection-item #90a4ae blue-grey lighten-2 hoverable">
								<div>
									Alvin
									<a href="#!" className="secondary-content">
										<i className="material-icons fas fa-angle-right" />
									</a>
								</div>
							</li>
							<li className="collection-item #90a4ae blue-grey lighten-2 hoverable">
								<div>
									Alvin
									<a href="#!" className="secondary-content">
										<i className="material-icons fas fa-angle-right" />
									</a>
								</div>
							</li>
							<li className="collection-item #90a4ae blue-grey lighten-2 hoverable">
								<div>
									Alvin
									<a href="#!" className="secondary-content">
										<i className="material-icons fas fa-angle-right" />
									</a>
								</div>
							</li>
						</ul>
					</div>

					<div className="asdasd col s9 " />
				</div>
			</div>
		);
	}
}
