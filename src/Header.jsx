import React, { useRef, useState } from "react";
// import logo from "/astronmath/astronlogo";
// import "./header.scss";
import { NavLink, useNavigate } from "react-router-dom";
// import { useSelector, useDispatch } from "react-redux";
// import { updateUser } from "../store/userSlice";

const Header = ({ navref, WindowInnerWidth }) => {
	const hamref = useRef();
	const navigate = useNavigate();
	// const [headerWidth, setWidth] = useState(undefined);
	const [hamopen, setham] = useState(false);

	const menuToggle = () => {
		// console.log(hamref.current);
		hamref.current.classList.toggle("active");
		setham((prev) => !prev);
	};
	// console.log("------", WindowInnerWidth);

	// React.useEffect(() => {
	// 	setWidth(navref?.current?.offsetWidth);
	// 	// Alternatively, use:
	// 	// const width = elementRef.current.getBoundingClientRect().width;
	// 	// console.log("Element width:", headerWidth?.current);
	// }, []);

	return (
		<div className="headerWrapper" ref={navref}>
			<div className="header-container default-container">
				<div
					className="logoBlock"
					onClick={() => {
						navigate("/");
					}}
				>
					<img src={WindowInnerWidth > 380 ? "/astronOriginal/astronlogo-tm-removebg.png" : "/astronOriginal/astron-logo-icon.png"} alt="astron" />
				</div>
				<div className="headerLinks">
					<NavLink to="/">HOME</NavLink>
					<NavLink to="/aboutus">ABOUT US</NavLink>
					{/* <NavLink to="/whatavedicmath">ABOUT VEDIC MATH</NavLink> */}
					{/* <NavLink to="/gallery">GALLERY</NavLink> */}
					<NavLink to="/courses">COURSES</NavLink>
					<NavLink to="/franchise">FRANCHISE</NavLink>
					<NavLink to="/contactus">CONTACT US</NavLink>
				</div>
				<div className="ham-menu" ref={hamref} onClick={menuToggle}>
					<svg className="bars" viewBox="0 0 100 100">
						<path className="line top" d="m 30,33 h 40 c 13.100415,0 14.380204,31.80258 6.899646,33.421777 -24.612039,5.327373 9.016154,-52.337577 -12.75751,-30.563913 l -28.284272,28.284272"></path>
						<path className="line middle" d="m 70,50 c 0,0 -32.213436,0 -40,0 -7.786564,0 -6.428571,-4.640244 -6.428571,-8.571429 0,-5.895471 6.073743,-11.783399 12.286435,-5.570707 6.212692,6.212692 28.284272,28.284272 28.284272,28.284272"></path>
						<path className="line bottom" d="m 69.575405,67.073826 h -40 c -13.100415,0 -14.380204,-31.80258 -6.899646,-33.421777 24.612039,-5.327373 -9.016154,52.337577 12.75751,30.563913 l 28.284272,-28.284272"></path>
					</svg>
				</div>
			</div>
			{hamopen && (
				<div className="ham-list">
					<div className="ham-links" onClick={menuToggle}>
						<NavLink to="/">HOME</NavLink>
						<NavLink to="/aboutus">ABOUT US</NavLink>
						{/* <NavLink to="/whatavedicmath">ABOUT VEDIC MATH</NavLink> */}
						{/* <NavLink to="/gallery">GALLERY</NavLink> */}
						<NavLink to="/courses">COURSES</NavLink>
						<NavLink to="/franchise">FRANCHISE</NavLink>
						<NavLink to="/contactus">CONTACT US</NavLink>
					</div>
				</div>
			)}
		</div>
	);
};

export default Header;
