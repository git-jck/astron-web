import { useRef } from "react";
import { Link } from "react-router-dom";

const Footer = () => {
	const monoref = useRef();
	// const copyNumber = async () => {
	// 	// Select the text field
	// 	// monoref.current.select();
	// 	// monoref.setSelectionRange(0, 99999); // For mobile devices

	// 	// Copy the text inside the text field
	// 	await navigator.clipboard.writeText(monoref.current.innerText);

	// 	// Alert the copied text
	// 	alert("Mo no. Copied: " + monoref.current.innerText);
	// };
	return (
		<>
			<div className="footerWrapper">
				<div className="borderWrapper">
					<div className="gd"></div>
					<div className="footer-container default-container">
						<div className="company">
							<img className="co-icon" src="/astronOriginal/astron-logo-icon-white.png" alt="footer-logo" />
							<img className="co-text" src="/astronOriginal/astronlogo-tm-text white.png" alt="footer-logo" />
							{/* <p className="co-name">ASTRON MATHS ACADEMY</p> */}
							{/* <hr /> */}
						</div>
						<div className="footer-links">
							<p className="title">Links</p>
							<Link to="/">Home</Link>
							<Link to="/aboutus">About Vedic Maths</Link>
							<Link to="/courses">Courses</Link>
							<Link to="/franchise">Franchise</Link>
							<Link to="/contactus">Contact Us</Link>
						</div>
						<div className="footer-contact">
							<p className="title">Contact</p>
							<div className="detail">
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
									<path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"></path>
								</svg>
								<p>City Light Complex, City Light Road, Nr Science Center, SURAT. GJ</p>
							</div>
							<div className="detail">
								<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
									<path d="M16.5562 12.9062L16.1007 13.359C16.1007 13.359 15.0181 14.4355 12.0631 11.4972C9.10812 8.55901 10.1907 7.48257 10.1907 7.48257L10.4775 7.19738C11.1841 6.49484 11.2507 5.36691 10.6342 4.54348L9.37326 2.85908C8.61028 1.83992 7.13596 1.70529 6.26145 2.57483L4.69185 4.13552C4.25823 4.56668 3.96765 5.12559 4.00289 5.74561C4.09304 7.33182 4.81071 10.7447 8.81536 14.7266C13.0621 18.9492 17.0468 19.117 18.6763 18.9651C19.1917 18.9171 19.6399 18.6546 20.0011 18.2954L21.4217 16.883C22.3806 15.9295 22.1102 14.2949 20.8833 13.628L18.9728 12.5894C18.1672 12.1515 17.1858 12.2801 16.5562 12.9062Z"></path>
								</svg>
								<p className="number" ref={monoref}>
									+91 9898259006
								</p>
								{/* <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" onClick={copyNumber}>
									<title>Click to copy Mo. No.</title>
									<path d="M15.24 2H11.3458C9.58159 1.99999 8.18418 1.99997 7.09054 2.1476C5.96501 2.29953 5.05402 2.61964 4.33559 3.34096C3.61717 4.06227 3.29833 4.97692 3.14701 6.10697C2.99997 7.205 2.99999 8.60802 3 10.3793V16.2169C3 17.725 3.91995 19.0174 5.22717 19.5592C5.15989 18.6498 5.15994 17.3737 5.16 16.312L5.16 11.3976L5.16 11.3024C5.15993 10.0207 5.15986 8.91644 5.27828 8.03211C5.40519 7.08438 5.69139 6.17592 6.4253 5.43906C7.15921 4.70219 8.06404 4.41485 9.00798 4.28743C9.88877 4.16854 10.9887 4.1686 12.2652 4.16867L12.36 4.16868H15.24L15.3348 4.16867C16.6113 4.1686 17.7088 4.16854 18.5896 4.28743C18.0627 2.94779 16.7616 2 15.24 2Z"></path>
									<path d="M6.6001 11.3974C6.6001 8.67119 6.6001 7.3081 7.44363 6.46118C8.28716 5.61426 9.64481 5.61426 12.3601 5.61426H15.2401C17.9554 5.61426 19.313 5.61426 20.1566 6.46118C21.0001 7.3081 21.0001 8.6712 21.0001 11.3974V16.2167C21.0001 18.9429 21.0001 20.306 20.1566 21.1529C19.313 21.9998 17.9554 21.9998 15.2401 21.9998H12.3601C9.64481 21.9998 8.28716 21.9998 7.44363 21.1529C6.6001 20.306 6.6001 18.9429 6.6001 16.2167V11.3974Z"></path>
								</svg> */}
								<Link to="https://wa.me/+919898259006" target="_blank">
									<img src="/astron web icon/whatsapp.png" alt="footer-logo" />
								</Link>
							</div>
							<div className="social-icon">
								<Link to="https://www.instagram.com/astronmathsacademy/" target="_blank">
									<img src="/astron web icon/so-insta-color.png" alt="footer-logo" />
								</Link>
								<Link to="https://www.facebook.com/astronmaths/" target="_blank">
									<img src="/astron web icon/so-facebook-color.png" alt="footer-logo" />
								</Link>
								{/* <Link to="https://wa.me/+919898259006" target="_blank">
									<img src="/astron web icon/so-whatsapp-logoimg.png" alt="footer-logo" />
								</Link> */}
							</div>
						</div>
					</div>
					<div className="gd"></div>
				</div>
			</div>
			<div className="copyright">© 2025 www.astronmathsacademy.com. All rights reserved.</div>
		</>
	);
};

export default Footer;
