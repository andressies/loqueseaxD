import React from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

import PropTypes from "prop-types";

export class Pedidos extends React.Component {
	render() {
		return (
			<div className="collection">
				<ul className="collapsible popout">
					<li>
						<div className="collapsible-header">
							<i className="material-icons" />
							MESA 1
						</div>
						<div className="collapsible-body">
							<span>5 CERVEZAS , 3 RON</span>
						</div>
					</li>
					<li>
						<div className="collapsible-header">
							<i className="material-icons" />
							MESA 2
						</div>
						<div className="collapsible-body">
							<span>5 CERVEZAS + 5 RON </span>
						</div>
					</li>
					<li>
						<div className="collapsible-header">
							<i className="material-icons" />
							MESA 3
						</div>
						<div className="collapsible-body">
							<span>4 PISCOLAS</span>
						</div>
					</li>
				</ul>
			</div>
		);
	}
}
