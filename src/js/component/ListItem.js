import React, { Component } from "react";
import PropTypes from "prop-types";

export default function ListItem(props) {
	return <li>{props.value}</li>;
}

ListItem.propTypes = {
	value: PropTypes.any
};
