import React, { Component } from "react";
import PropTypes from "prop-types";
import Navbar2 from "../component/navbar2";
import { ListadoPedidos } from "../component/listadoPedidos";
import { NumberList } from "../component/ordenes";
import { Context } from "../store/appContext";
import { Pedidos } from "../component/bb";

export class BartenderView extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div id="fondo" className="row">
				<div className="">
					<Navbar2 />
				</div>
				<div id="fondopedidos" className="row">
					<div className="col s12 m8">
						<ListadoPedidos />
					</div>

					<div className="row">
						<div className="col s12 m2">
							<Pedidos />
						</div>
					</div>
				</div>
			</div>
		);
	}
}
