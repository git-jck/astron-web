import React, { useState, useEffect, useRef } from "react";
import Slider from "../homeComponents/Slider";
import HomeTitle from "../homeComponents/HomeTitle";
import About from "../homeComponents/About";
import Power from "../homeComponents/Power";
import GalleryPictures from "../homeComponents/GalleryPictures";
import Why from "../homeComponents/Why";
import Testimonial from "../homeComponents/Testimonial";
import TestimonialV from "../homeComponents/TestimonialV";
import Stats from "../homeComponents/Stats";
import Sss from "../homeComponents/Sss";

const Home = () => {
	const [statrun, setStatrun] = useState(false);
	const whyref = useRef();
	const observer = new IntersectionObserver((entries) => {
		// console.log("@@@@@@@@@", entries);
		// console.log("@@@@@@@@@", statrun); // show false here ??
		setStatrun(entries);
		// for (const entry of entries) {
		// 	const intersecting = entry.isIntersecting;
		// 	console.log("-------", entry);
		// 	console.log("=======", intersecting);
		// 	// entry.target.style.backgroundColor = intersecting ? "blue" : "orange";
		// }
	});
	// console.log("@@@@@@@@@", statrun);
	// console.log('****', observer);
	// const box = document.getElementById("box");

	return (
		<>
			<Slider />
			<HomeTitle titleName="About Us" />
			<About />
			<Power vidsrc="/astronOriginal/nine digit calc.mp4" />
			<HomeTitle titleName="Gallery" titleColor="y" />
			<GalleryPictures />
			<HomeTitle titleName="Success Stories" />
			<TestimonialV />
			<Power vidsrc="/astronOriginal/vedic modi.mp4" context='modi' />
			<Why whyref={whyref} obs={observer} statrun={statrun} />
			{/* <Stats /> */}
			<HomeTitle titleName="Testimonial" titleColor="y" />
			<Testimonial />
			{/* <Sss /> */}
		</>
	);
};

export default Home;
