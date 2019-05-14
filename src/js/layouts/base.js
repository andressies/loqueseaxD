import React, { Component } from "react";
import { Route } from "react-router-dom";
import PropTypes from "prop-types";
import { Navbar } from "../component/navbar.js";

const BaseLayout = ({ children }) => (
	<div>
		<Navbar />
		{children}
		<p>Este es ,mi footer</p>
	</div>
);

BaseLayout.propTypes = {
	children: PropTypes.any
};

const BaseLayoutRoute = ({ component: Component, ...rest }) => {
	return (
		<Route
			{...rest}
			render={matchProps => (
				<BaseLayout>
					<Component {...matchProps} />
				</BaseLayout>
			)}
		/>
	);
};

BaseLayoutRoute.propTypes = {
	component: PropTypes.any
};

export default BaseLayoutRoute;
