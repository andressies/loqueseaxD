import ReactDOM from "react-dom";
import React, { Component } from "react";
import PropTypes from "prop-types";

export class CategoriaView extends React.Component {
	render() {
		return (
			<div className="row">
				<div className="col s12 m12 center-align">
					<div className="card">
						<div className="card-image">
							<img src="" />

							<div id="carousel_id center-align">
								<div className="carousel  ">
									<a className="carousel-item valign-wrapper" href="#one!">
										<img src="https://lorempixel.com/250/250/nature/1" />
									</a>
									<a className="carousel-item valign-wrapper" href="#two!">
										<img src="https://lorempixel.com/250/250/nature/2" />
									</a>
									<a className="carousel-item valign-wrapper" href="#three!">
										<img src="https://lorempixel.com/250/250/nature/3" />
									</a>
									<a className="carousel-item valign-wrapper" href="#four!">
										<img src="https://lorempixel.com/250/250/nature/4" />
									</a>
									<a className="carousel-item valign-wrapper" href="#five!">
										<img src="https://lorempixel.com/250/250/nature/5" />
									</a>
								</div>
							</div>
						</div>

						<div className="card-action #757575 grey darken-1">
							<div className="">
								<h5>Menu</h5>
							</div>
							<br />
							<br />

							<div id="cerveza_icono " className="row">
								<div className=" col s6 m6 l6">
									<a>
										<img
											className="hoverable   "
											id="cerveza_img"
											src="https://i1.wp.com/fermentumcr.com/wp-content/uploads/2018/06/cropped-icono-cerveza-2.png?ssl=1"
										/>
									</a>
								</div>
								<div id="cerveza_icono " className=" col s6 m6 l6">
									<a>
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
