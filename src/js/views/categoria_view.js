import ReactDOM from "react-dom";
import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export class CategoriaView extends React.Component {
	render() {
		return (
			<div id="general" className="row">
				<div className="col s12 m12 center-align">
					<div className="card">
						<div id="card_img" className="card-image">
							<img className="fondo_img" src="" />
							<div className="left-align" id="promociones">
								<p className="left-align">Welcome to</p>
								&nbsp; &nbsp;
								<div id="best_bar">
									<h5 className="right-align">The Best Bar</h5>
								</div>
							</div>
							<br />

							<Link
								to="/carrito"
								className="btn-floating btn-large halfway-fab waves-effect waves-light teal">
								<i className="material-icons fas fa-shopping-cart" />
							</Link>
						</div>

						<div className="card-action #000000 black ">
							<div className="text_menu">
								<h5>Menu</h5>
							</div>
							<br />
							<br />
							<div className="col s12 m12">
								<div id="categoria_cervezas" className="card horizontal">
									<div className="card-image">
										<img
											id="imgcategoriabeer"
											src="http://as01.epimg.net/tikitakas/imagenes/2017/08/16/portada/1502909050_145252_1502909120_noticia_normal.jpg"
										/>
									</div>
									<div className="card-stacked">
										<div id="categoria_beer_content" className="card-content">
											<p>Cervezas</p>
										</div>
										<div id="gotobeer" className="card-action">
											<Link to="/drinks">Go to beer</Link>
										</div>
									</div>
								</div>
							</div>
							<div className="col s12 m12">
								<div id="categoria_cervezas" className="card horizontal">
									<div className="card-image">
										<img
											id="imgcategoriabeer"
											src="https://www.devinosyvides.com.ar/fotos/cache/707/devinos-foto246.jpg"
										/>
									</div>
									<div className="card-stacked">
										<div id="categoria_beer_content" className="card-content">
											<p>Vinos</p>
										</div>
										<div id="gotobeer" className="card-action">
											<Link to="/vinos">Go to wines</Link>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
