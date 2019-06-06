import React, { Component } from "react";
import { Route } from "react-router-dom";
import PropTypes from "prop-types";
import { Navbar } from "../component/navbar.js";

const EmptyLayout = ({ children }) => <div>{children}</div>;

EmptyLayout.propTypes = {
	children: PropTypes.any
};

const EmptyLayoutRoute = ({ component: Component, ...rest }) => {
	return (
		<Route
			{...rest}
			render={matchProps => (
				<EmptyLayout>
					<Component {...matchProps} />
				</EmptyLayout>
			)}
		/>
	);
};

EmptyLayoutRoute.propTypes = {
	component: PropTypes.any
};

export default EmptyLayoutRoute;
