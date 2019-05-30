import ReactDOM from "react-dom";
import React, { Component } from "react";
import PropTypes from "prop-types";

export class Carrito extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			lista: []
		};
		this.agregar = this.agregar.bind(this);
	}
	agregar() {
		this.setState({});
	}

	render() {
		return (
			<div className="text">
				<button />
			</div>
		);
	}
}
