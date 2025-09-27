import React, { useRef } from "react";
import ContactForm from "../miniComponent/ContactForm";
import { Link } from "react-router-dom";

const ContactUs = () => {
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
		<div className="contactusWrapper">
			<div className="gd"></div>
			<div className="content-img">
				<img src="/astronDemo images/contactslider.png" alt="" />
			</div>
			<div className="contactus-container default-container default-container-height">
				<h5 className="title">Contact Us</h5>
				<div className="contactus-content">
					<div className="contact-details">
						<div className="detail">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
								<path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"></path>
							</svg>
							<div className="text">
								<p>Main Office : </p>
								<p>City Light Complex, City Light, Nr. Science center, SURAT-GJ</p>
							</div>
						</div>
						<div className="mno-detail">
							<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
								<path d="M16.5562 12.9062L16.1007 13.359C16.1007 13.359 15.0181 14.4355 12.0631 11.4972C9.10812 8.55901 10.1907 7.48257 10.1907 7.48257L10.4775 7.19738C11.1841 6.49484 11.2507 5.36691 10.6342 4.54348L9.37326 2.85908C8.61028 1.83992 7.13596 1.70529 6.26145 2.57483L4.69185 4.13552C4.25823 4.56668 3.96765 5.12559 4.00289 5.74561C4.09304 7.33182 4.81071 10.7447 8.81536 14.7266C13.0621 18.9492 17.0468 19.117 18.6763 18.9651C19.1917 18.9171 19.6399 18.6546 20.0011 18.2954L21.4217 16.883C22.3806 15.9295 22.1102 14.2949 20.8833 13.628L18.9728 12.5894C18.1672 12.1515 17.1858 12.2801 16.5562 12.9062Z"></path>
							</svg>
							<div className="text">
								<p ref={monoref}>+91 9898259006</p>
							</div>
							{/* <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" onClick={copyNumber}>
								<title>Click to copy Mo. No.</title>
								<path d="M15.24 2H11.3458C9.58159 1.99999 8.18418 1.99997 7.09054 2.1476C5.96501 2.29953 5.05402 2.61964 4.33559 3.34096C3.61717 4.06227 3.29833 4.97692 3.14701 6.10697C2.99997 7.205 2.99999 8.60802 3 10.3793V16.2169C3 17.725 3.91995 19.0174 5.22717 19.5592C5.15989 18.6498 5.15994 17.3737 5.16 16.312L5.16 11.3976L5.16 11.3024C5.15993 10.0207 5.15986 8.91644 5.27828 8.03211C5.40519 7.08438 5.69139 6.17592 6.4253 5.43906C7.15921 4.70219 8.06404 4.41485 9.00798 4.28743C9.88877 4.16854 10.9887 4.1686 12.2652 4.16867L12.36 4.16868H15.24L15.3348 4.16867C16.6113 4.1686 17.7088 4.16854 18.5896 4.28743C18.0627 2.94779 16.7616 2 15.24 2Z"></path>
								<path d="M6.6001 11.3974C6.6001 8.67119 6.6001 7.3081 7.44363 6.46118C8.28716 5.61426 9.64481 5.61426 12.3601 5.61426H15.2401C17.9554 5.61426 19.313 5.61426 20.1566 6.46118C21.0001 7.3081 21.0001 8.6712 21.0001 11.3974V16.2167C21.0001 18.9429 21.0001 20.306 20.1566 21.1529C19.313 21.9998 17.9554 21.9998 15.2401 21.9998H12.3601C9.64481 21.9998 8.28716 21.9998 7.44363 21.1529C6.6001 20.306 6.6001 18.9429 6.6001 16.2167V11.3974Z"></path>
							</svg> */}
							<Link to="https://wa.me/919898259006" target="_blank">
								<img src="/astron web icon/whatsapp.png" alt="footer-logo" />
							</Link>
						</div>
						<div className="mno-detail branch">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
								<path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"></path>
							</svg>
							<div className="text">
								<p>
									<b>Other Branch : </b>
								</p>
								<Link to="https://maps.app.goo.gl/n17h6SbLoC3vHwd3A" target="_blank">
									Pal-Adajan
								</Link>
								<Link to="https://maps.app.goo.gl/2fKtayvHCBctL4za8" target="_blank">
									Vesu
								</Link>
							</div>
						</div>
						<div className="gmap">
							<iframe
								title="astron-map"
								src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3720.6077920426956!2d72.78945507843925!3d21.168001232767182!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04de671dfe92f%3A0x88ade4c01ff22c1b!2sAstron%20Maths%20Academy!5e0!3m2!1sen!2sin!4v1746965986511!5m2!1sen!2sin"
								width="100%"
								height="100%"
								style={{ width: "100%", height: "100%", minHeight: "300px", maxHeight: "400px", border: "2px solid #fff", borderRadius: "15px" }}
								allowFullScreen=""
								loading="lazy"
								referrerPolicy="no-referrer-when-downgrade"
							></iframe>
						</div>
					</div>
					<div className="contact-form">
						<ContactForm />
					</div>
				</div>
			</div>
			<div className="gd"></div>
		</div>
	);
};

export default ContactUs;
