import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

// Add the styles here
const changeButtonStyle = {
	background: "transparent",
	border: "1px solid black",
	color: "#6c757d",
};
const changeContainerStyle = {
	background: "#f8f9fa",
	border: "1px solid #dee2e6",
	borderRadius: "1rem",
};

const Jumbotron = (props) => {
	return (
		<div className="container-fluid py-5" style={changeContainerStyle}>
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

ReactDOM.render(
	<Jumbotron
		title="Custom Jumbotron"
		description="Using a series of utilities, you can create this Jumbotron, just like the one in previous versions of Bootstrap. Check out the examples below for how you can remix and restyle it to your liking."
		label="Example button"
	/>,
	document.querySelector("#myDiv")
);
