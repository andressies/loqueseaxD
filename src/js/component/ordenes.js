import React, { Component } from "react";
import PropTypes from "prop-types";
import ListItem from "./ListItem";

export function NumberList(props) {
	const numbers = props.numbers;
	const listItems = numbers.map(number => <ListItem key={number.toString()} value={number} />);
	return <ul>{listItems}</ul>;
}

NumberList.propTypes = {
	numbers: PropTypes.any
};

/*
export default class ordenes extends React.Component {
	render() {
		return (
			
			function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) =>
    <li key={number.toString()}>
      {number}
    </li>
  );
  return (
    <ul>{listItems}</ul>
  );
}
const = [listItems];
ReactDOM.render(
  <NumberList numbers={numbers} />,
  document.getElementById('root')
);
*/
