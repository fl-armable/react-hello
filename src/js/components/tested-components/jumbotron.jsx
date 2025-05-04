import React from "react";
import PropTypes from "prop-types";

// In order to practice styles, I changed button and container styles
// If you remove the styles, the landing page will look like the example

const changeButtonStyle = {
	background: "transparent",
	border: "1px solid black",
	color: "#6c757d",
};
const changeContainerStyle = {
	background: "#f8f9fa",
	border: "1px solid #dee2e6",
	borderRadius: "0.5rem",
};

const Jumbotron = (props) => {
	return (
		<div className="container-fluid my-2 py-4" style={changeContainerStyle}>
			<h1 className="display-5 fw-bold">{props.title}</h1>
			<p className="col-md-8 fs-4">{props.description}</p>
			<button className="btn btn-primary btn-lg" style={changeButtonStyle} type="button">
				{props.label}
			</button>
		</div>
	);
};

Jumbotron.propTypes = {
	title: PropTypes.string,
	description: PropTypes.string,
	label: PropTypes.string,
};

export default Jumbotron;
