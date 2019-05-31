import React, { Component } from "react";
import PropTypes from "prop-types";

export class ListadoPedidos extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			text: "",
			pedidos: [
				{
					id: 1,
					name: "3 MOJITOS , 4 CERVEZAS"
				},
				{
					id: 2,
					name: "5 BEBIDAS, 3 RON "
				},
				{
					id: 3,
					name: "1 AGUA MINERAL"
				}
			]
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	render() {
		return (
			<div>
				<h3>LISTA DE PEDIDOS</h3>
				<TodoList items={this.state.pedidos} />
				<form onSubmit={this.handleSubmit}>
					<label htmlFor="new-todo">¿Qué orden vas a ingresar?</label>
					<input id="new-todo" onChange={this.handleChange} value={this.state.text} />
					<button>Añadir Pedidos #{this.state.pedidos.length}</button>
				</form>
			</div>
		);
	}

	handleChange(e) {
		this.setState({ text: e.target.value });
	}

	handleSubmit(e) {
		e.preventDefault();
		if (!this.state.text.length) {
			return;
		}
		const newItem = {
			name: this.state.text,
			id: Date.now()
		};
		this.setState(state => ({
			pedidos: state.pedidos.concat(newItem)
		}));
	}
}

class TodoList extends React.Component {
	constructor(props) {
		super(props);
		this.handleClickItem = this.handleClickItem.bind(this);
	}
	handleClickItem(item) {
		alert(ListadoPedidos);
	}
	render() {
		return (
			<ul>
				{this.props.items.map(item => (
					<li onClick={() => this.handleClickItem(item)} key={item.id}>
						{item.name}
					</li>
				))}
			</ul>
		);
	}
}

TodoList.propTypes = {
	items: PropTypes.any
};
