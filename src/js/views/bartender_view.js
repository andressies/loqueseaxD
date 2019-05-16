import React, { Component } from "react";
import PropTypes from "prop-types";
import Navbar2 from "../component/navbar2";
import ListadoPedidos from "../component/listadoPedidos";
import Ordenes from "../component/ordenes";

export class BartenderView extends React.Component {
	render() {
		return (
			<div className="row">
				<div className="">
					<Navbar2 />
				</div>
				<div className="row">
					<div className="col s12 m4">
						<ListadoPedidos />
					</div>
					<div className="col s12 m8">
						<Ordenes />
					</div>
				</div>
			</div>
		);
	}
}
