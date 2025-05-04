import React from "react";

// every component are in its own file
import Navbar from './tested-components/navbar.jsx';
import Jumbotron from './tested-components/jumbotron.jsx';
import Card from './tested-components/card.jsx';

//Home is a main component
//Jumbotron and card are in the same container and it covers 80% of the window

const Home = () => {
	return (
		<div>
			<Navbar
				brand="Navbar"
				brandUrl="#"
				item1="Home"
				item2="About"
				item3="Services"
				item4="Contact"
				linkUrl1="#"
				linkUrl2="#2"
				linkUrl3="#3"
				linkUrl4="#4"			/>
			<div className="container-fluid w-75">
				<Jumbotron
					title="Custom Jumbotron"
					description="Using a series of utilities, you can create this Jumbotron, just like the one in previous versions of Bootstrap. Check out the examples below for how you can remix and restyle it to your liking."
					label="Example button"			/>
				<div className="row mx-auto">
					<Card
						title="Card title"
						description="Some quick example text to build on the card title and make up the bulk of the card's content."
						label="Go somewhere"
						imageUrl="./src/img/big-project-image.png"				/>
					<Card
						title="Card title"
						description="Some quick example text to build on the card title and make up the bulk of the card's content."
						label="Go somewhere"
						imageUrl="./src/img/big-project-image.png"				/>
					<Card
						title="Card title"
						description="Some quick example text to build on the card title and make up the bulk of the card's content."
						label="Go somewhere"
						imageUrl="./src/img/big-project-image.png"				/>
					<Card
						title="Card title"
						description="Some quick example text to build on the card title and make up the bulk of the card's content."
						label="Go somewhere"
						imageUrl="./src/img/big-project-image.png"				/>
				</div>
			</div>
		</div>
	);
};

export default Home;