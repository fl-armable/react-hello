import React from "react";
import PropTypes from "prop-types";


const Navbar = (props) => {
	return (
		<nav className="navbar navbar-expand-md bg-dark navbar-dark sticky-top">
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

export default Navbar;
