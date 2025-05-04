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

const Card = (props) => {
	return (
		<div className="card h-100" style={changeContainerStyle}>
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

ReactDOM.render(
	<Card
		title="Card title"
		description="Some quick example text to build on the card title and make up the bulk of the card's content."
		label="Go somewhere"
		imageUrl="./big-project-image.png"
	/>,
	document.querySelector("#myDiv")
);
