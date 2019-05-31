import React from "react";
import { Link } from "react-router-dom";

export default class Navbar2 extends React.Component {
	render() {
		return (
			<div>
				<nav id="color6" className="nav-extended">
					<div className="nav-wrapper">
						<a href="#!" className="brand-logo">
							BARTENDER: EDUARDO
						</a>

						<ul className="right hide-on-med-and-down">
							<li>
								<a>
									<img
										className="img_navbar"
										src="https://www.mygon.com/ImageAdapterV2/campaign/14010/campaign1.jpg"
									/>
								</a>
							</li>
							<li>
								<a>A second link</a>
							</li>
							<li>
								<a>A third link</a>
							</li>
						</ul>
					</div>
					<div className="nav-content">
						<span className="nav-title">10:02 PM</span>
						<a className="btn-floating btn-large halfway-fab waves-effect waves-light teal">
							<i className="material-icons">add</i>
						</a>
					</div>
				</nav>
			</div>
		);
	}
}
