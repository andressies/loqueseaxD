import ReactDOM from "react-dom";
import React, { Component } from "react";
import PropTypes from "prop-types";

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

							<div id="promociones">
								<h5 className="left-align">Promociones</h5>
							</div>
							<div id="carousel_id ">
								<div className="carousel  ">
									<a className="carousel-item valign-wrapper" href="#one!">
										<img src="https://static.vix.com/es/sites/default/files/imj/elgrancatador/t/tragos-aperitivos-peruanos-1.jpg" />
									</a>

									<a className="carousel-item valign-wrapper" href="#two!">
										<img src="https://img.elcomercio.pe/files/ec_article_multimedia_gallery/uploads/2018/02/09/5a7dc529493b1.jpeg" />
									</a>

									<a className="carousel-item valign-wrapper" href="#three!">
										<img src="https://loff.it/wp-content/uploads/2018/08/loffit-10-tragos-espirituosos-para-celebrar-el-verano-01-600x450-1533135950.jpeg" />
									</a>

									<a className="carousel-item valign-wrapper" href="#four!">
										<img src="https://lifestyle.americaeconomia.com/sites/lifestyle.americaeconomia.com/files/styles/gallery_image/public/trago_celeste_0.jpg?itok=XUY17HaK" />
									</a>

									<a className="carousel-item valign-wrapper" href="#five!">
										<img src="http://www.holamujer.cl/wp-content/uploads/2017/02/Pi%C3%B1aColada.jpg" />
									</a>
								</div>
							</div>
							<a className="btn-floating btn-large halfway-fab waves-effect waves-light teal">
								<i className="material-icons fas fa-shopping-cart" />
							</a>
						</div>

						<div className="card-action #000000 black ">
							<div className="text_menu">
								<h5>Menu</h5>
							</div>
							<br />
							<br />

							<div id="cerveza_icono " className="row">
								<div className=" col s6 m6 l6 ">
									<a href="https://proyecto-bar--andressies.c9users.io/drinks">
										<img
											className="hoverable"
											id="cerveza_img"
											src="https://i1.wp.com/fermentumcr.com/wp-content/uploads/2018/06/cropped-icono-cerveza-2.png?ssl=1"
										/>
									</a>
								</div>
								<div id="cerveza_icono " className=" col s6 m6 l6">
									<a href="https://proyecto-bar--andressies.c9users.io/vinos">
										<img
											className="hoverable "
											id="cerveza_img"
											src="https://image.flaticon.com/icons/svg/65/65667.svg"
										/>
									</a>
								</div>
							</div>

							<div id="cerveza_icono " className="row">
								<div className=" col s6 m6 l6">
									<a>
										<img
											className="hoverable "
											id="cerveza_img"
											src="https://image.flaticon.com/icons/svg/32/32435.svg"
										/>
									</a>
								</div>
								<div id="cerveza_icono " className=" col s6 m6 l6">
									<a>
										<img
											className="hoverable "
											id="cerveza_img"
											src="https://image.flaticon.com/icons/png/512/40/40332.png"
										/>
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
