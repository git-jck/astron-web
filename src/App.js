// import logo from "./logo.svg";
import "./App.scss";
import { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./componentsPage/Home";
import AboutUs from "./componentsPage/AboutUs";
import VedicMaths from "./componentsPage/VedicMaths";
import Gallery from "./componentsPage/Gallery";
import Franchise from "./componentsPage/Franchise";
import ContactUs from "./componentsPage/ContactUs";
import Layout from "./Layout";
import Pnf from "./componentsPage/Pnf";
import NoInternet from "./componentsPage/NoInternet";
import Courses from "./componentsPage/Courses";

function App() {
	const location = useLocation();
	const [isOnline, setOnline] = useState(true);
	// const [offlineOK, setOfflineOK] = useState(false);
	const [WindowInnerWidth, setWindowWidth] = useState(window.innerWidth);

	// console.log(isOnline, offlineOK);

	useEffect(() => {
		if (navigator.onLine) {
			// console.log(navigator.onLine);
			setOnline(true);
		} else {
			// console.log(navigator.onLine);
			setOnline(false);
		}
	}, [location.pathname]);
	useEffect(() => {
		const handleOnline = () => {
			setOnline(true);
		};
		const handleOffline = () => {
			setOnline(false);
			// setOfflineOK(false);
		};

		if (navigator.onLine) {
			// console.log(navigator.onLine);
			setOnline(true);
		} else {
			// console.log(navigator.onLine);
			setOnline(false);
		}

		window.addEventListener("online", handleOnline);
		window.addEventListener("offline", handleOffline);

		return () => {
			window.removeEventListener("online", handleOnline);
			window.removeEventListener("offline", handleOffline);
		};
	}, []);

	useEffect(() => {
		console.log("version : '3.1.0'");
		window.addEventListener("resize", function () {
			setWindowWidth(this.window.innerWidth);
		});
		return () => {
			window.removeEventListener("resize");
		};
	}, []);

	return (
		<>
			{!isOnline && (
				<div className={"astronAppWrapper-notOnline"}>
					<NoInternet setOnline={setOnline} />
				</div>
			)}
			<Routes>
				<Route path="/" element={<Layout WindowInnerWidth={WindowInnerWidth} />}>
					{/* <Route element={<ProtectedRoute />}> */}
					<Route index element={<Home />} />
					<Route path="/aboutus" element={<AboutUs />} />
					<Route path="/whatavedicmath" element={<VedicMaths />} />
					<Route path="/gallery" element={<Gallery />} />
					<Route path="/courses" element={<Courses />} />
					{/* <Route path="/franchise" element={<Franchise />} /> */}
					<Route path="/franchise/*" element={<Franchise />} />
					<Route path="/contactus" element={<ContactUs />} />
					<Route path="/*" element={<Pnf />} />
					{/* </Route> */}
				</Route>
				{/* <Route path='/login' element={<Login />} /> */}
			</Routes>
		</>
	);
}

export default App;
