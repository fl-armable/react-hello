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

const Navbar = (props) => {
	return (
		<nav className="navbar navbar-expand-lg bg-dark navbar-dark fixed-top">
			<div className="container-fluid">
				<a className="navbar-brand" href={props.brandUrl}>
					{props.brand}
				</a>
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarNav"
					aria-controls="navbarNav"
					aria-expanded="false"
					aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarNav">
					<div className="navbar-nav ms-auto">
						<a className="nav-link active" aria-current="page" href={props.linkUrl1}>
							{props.item1}
						</a>
						<a className="nav-link" href={props.linkUrl2}>
							{props.item2}
						</a>
						<a className="nav-link" href={props.linkUrl3}>
							{props.item3}
						</a>
						<a className="nav-link" href={props.linkUrl4}>
							{props.item4}
						</a>
					</div>
				</div>
			</div>
		</nav>
	);
};

Navbar.propTypes = {
	brand: PropTypes.string,
	brandUrl: PropTypes.string,
	item1: PropTypes.string,
	item2: PropTypes.string,
	item3: PropTypes.string,
	item4: PropTypes.string,
	linkUrl1: PropTypes.string,
	linkUrl2: PropTypes.string,
	linkUrl3: PropTypes.string,
	linkUrl4: PropTypes.string,
};

ReactDOM.render(
	<Navbar
		brand="Navbar"
		brandUrl="#"
		item1="Home"
		item2="About"
		item3="Services"
		item4="Contact"
		linkUrl1="#1"
		linkUrl2="#2"
		linkUrl3="#3"
		linkUrl4="#4"
	/>,
	document.querySelector("#myDiv")
);
