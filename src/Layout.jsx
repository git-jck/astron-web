import React, { useRef, useEffect, useLayoutEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./componentsPage/Footer";
import NoInternet from "./componentsPage/NoInternet";

const Layout = ({ WindowInnerWidth }) => {
	const layoutref = useRef();
	const navbar = useRef();
	const { pathname } = useLocation();

	// Get the offset position of the navbar
	// const sticky = navbar.offsetTop;

	// Add the sticky class to the navbar when you reach its scroll position. Remove the sticky class when you leave the scroll position.
	function headerObserver() {
		// console.log(navbar?.current?.offsetTop, layoutref.current.scrollTop);

		if (layoutref.current.scrollTop > 300) {
			navbar.current.classList.add("sticky-header");
		} else {
			navbar.current.classList.remove("sticky-header");
		}
	}

	useLayoutEffect(() => {
		layoutref.current.scrollTo({ top: 0, left: 0, behavior: "instant" });
	}, [pathname]);
	return (
		<div className="layoutWrapper" onScroll={() => headerObserver()} ref={layoutref}>
			<Header navref={navbar} WindowInnerWidth={WindowInnerWidth} /* scrollFn={headerObserver} */ />
			<Outlet />
			<Footer />
		</div>
	);
};

export default Layout;
