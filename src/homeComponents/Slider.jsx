import React, { useEffect, useState } from "react";
import "./slider.scss";
import { Link } from "react-router-dom";
import TimeLoader from "../miniComponent/TimeLoader";

const Slider = () => {
	const [slide, setSlide] = useState(0);
	const [autoSlide, setAutoSlide] = useState(true);
	const [startLoader, setStart] = useState(false);

	const imastate = {
		ima: ["/astronDemo images/titleimage.jpg", "/astronDemo images/slider 2.jpg", "/astronDemo images/puzzle kids.png"],
	};
	const titlestack = {
		title: ["Make your calculation faster", "Be a Math Star", "Puzzles + Maths"],
		subTitle: ["Be a math magician", "Think Smart, Solve Fast!", "Genius in the making!"],
	};
	// const autoIncFn = () => {
	// 	// console.log("autoIncFn called");
	// 	setSlide((prev) => {
	// 		return prev === 2 ? prev : ++prev;
	// 	});
	// };
	const incFn = () => {
		// console.log("IncFn called");
		setSlide((prev) => {
			return prev === 2 ? prev : ++prev;
		});
		setAutoSlide(false);
		setStart(false);
	};
	const decFn = () => {
		setSlide((prev) => {
			return prev === 0 ? prev : --prev;
		});
		setAutoSlide(false);
		setStart(false);
	};

	useEffect(() => {
		setStart(true);
	}, []);
	useEffect(() => {
		if (autoSlide) {
			// console.log("---", slide, autoSlide);
			const interval = setInterval(() => {
				setSlide((prev) => (prev === 2 ? 0 : ++prev));
				if (slide === 2) {
					// setSlide(0);
					setAutoSlide(false);
					setStart(false);
					// console.log("slide is 2, resetting to 0");
					clearInterval(interval);
				}
			}, 6000);
			return () => clearInterval(interval);
		}
	}, [slide]);
	return (
		<div className="sliderWrapper">
			<div className="slider-abs-static">
				{startLoader && <TimeLoader isActiveProps={startLoader} />}
				<div className="slider-img-wrapper" style={{ left: `-${slide * 100}%` }}>
					<img src={imastate.ima[0]} alt="slider" />
					<img src={imastate.ima[1]} alt="slider" />
					<img src={imastate.ima[2]} alt="slider" />
				</div>
			</div>
			<div className="slider-title">
				<p>{titlestack.title[slide]}</p>
				<p>{titlestack.subTitle[slide]}</p>
				<Link to="/contactus">Make an Inquiry</Link>
			</div>

			<div className="controlBlock">
				{slide !== 0 && (
					<div className="prev" onClick={decFn}>
						<svg xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24">
							<polyline fill="none" strokeWidth="2" points="7 2 17 12 7 22" transform="matrix(-1 0 0 1 24 0)"></polyline>
						</svg>
					</div>
				)}
				{slide !== 2 && (
					<div className="next" onClick={incFn}>
						<svg xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24">
							<polyline fill="none" strokeWidth="2" points="7 2 17 12 7 22"></polyline>
						</svg>
					</div>
				)}
			</div>
		</div>
	);
};

export default Slider;
