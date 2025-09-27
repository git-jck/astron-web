import React from "react";
import { Link, NavLink } from "react-router-dom";

const About = () => {
	return (
		<div className="aboutWrapper">
            <div className="gapdiv"></div>
			<div className="about-container default-container">
				<div className="about-img">
					<img src={"/astronOriginal/abouthome.jpg"} alt="astron" />
				</div>
				<div className="content">
                    <p>About Us</p>
                    <p>Astron maths Academy was founded in 2008 with the motive to help students by engaging them with ancient mathematical learning experience. Moreover, learning Vedic Mathematics strengthens their calculation skills and elevates love for the subject.</p>
                    <NavLink to="/aboutus">Read more ...</NavLink>
                    </div>
				<div className="content">
                <p>About Vedic Math</p>
                    <p>Vedic maths is the world's fastest calculating system discovered by Jagadguru Shankaracharya Sri Bharti Krishna Tirthji (1884-1960). It is derived from ancient Vedas particularly from Atharva Veda.</p>
                    <NavLink to="/aboutus">Read more ...</NavLink>
                </div>
			</div>
            <div className="gapdiv"></div>
		</div>
	);
};

export default About;
