import React, { Component } from "react";
import PropTypes from "prop-types";

export default class ordenes extends React.Component {
	render() {
		return (
			<ul className="collection">
				<li className="collection-item avatar">
					<img src="images/yuna.jpg" alt="" className="circle" />
					<span className="Title">Ordenes recibidas</span>
					<p>
						156 : Bartender Raul <br /> 1 Cerveza 3 Piscolas 5 Ron
					</p>
					<a href="#!" className="secondary-content">
						<i className="material-icons">ELIMINAR</i>
					</a>
				</li>
				<li className="collection-item avatar">
					<i className="material-icons circle">folder</i>
					<span className="" />
					<p>
						158 <br />4 agua ardiente 2 mojitos
					</p>
					<a href="#!" className="secondary-content">
						<i className="material-icons">ELIMINAR</i>
					</a>
				</li>
				<li className="collection-item avatar">
					<i className="material-icons circle green">insert_chart</i>
					<span className="" />
					<p>
						157 <br />4 cervezas 3 piscolas 6 margaritas
					</p>
					<a href="#!" className="secondary-content">
						<i className="material-icons">ELIMINAR</i>
					</a>
				</li>
				<li className="collection-item avatar">
					<i className="material-icons circle red">play_arrow</i>
					<span className="title">Title</span>
					<p>
						First Line <br />
						Second Line
					</p>
					<a href="#!" className="secondary-content">
						<i className="material-icons">ELIMINAR</i>
					</a>
				</li>
			</ul>
		);
	}
}
