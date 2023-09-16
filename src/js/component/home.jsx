import React from "react";
import NavBar from "./navbar.jsx"
import Jumbotron from "./jumbotron.jsx";
import Cards from "./cards.jsx"
import Footer from "./footer.jsx"



//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";


//create your first component
const Home = () => {
	return (
		<>
			<NavBar />
			<Jumbotron />
			<div className='container'>
				<div className="row">
					<Cards />
					<Cards />
					<Cards />
					<Cards />
					<Cards />
					<Cards />
				</div>
			</div>
			<Footer />
		</>
	);
};

export default Home;
