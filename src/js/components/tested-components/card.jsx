import React from "react";
import PropTypes from "prop-types";

// In order to practice styles, I changed button and container styles.
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

const Card = (props) => {
	return (
		<div className="col-md py-2" style={changeContainerStyle}>
			<img src={props.imageUrl} className="card-img-top" alt="..." />
			<div className="card-body">
				<h5 className="card-title">{props.title}</h5>
				<p className="card-text">{props.description}</p>
				<a href="#" className="btn btn-primary" style={changeButtonStyle}>
					{props.label}
				</a>
			</div>
		</div>
	);
};

Card.propTypes = {
	title: PropTypes.string,
	description: PropTypes.string,
	label: PropTypes.string,
	imageUrl: PropTypes.string,
};

export default Card;