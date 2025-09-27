import { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";

const ContactForm = ({formtype}) => {
	// const inputdrop = useRef(null);
	const [qstring] = useSearchParams();
	// console.log(qstring.get("form"));
	const formQString = qstring.get("form") || formtype || null;

	const [isLoading, setLoading] = useState(false);
	const [isFocusedValue, setIsFocusedValue] = useState({
		fullname: false,
		mobileno: false,
		emailid: false,
		refrence: false,
		inquiry: false,
		message: false,
	});
	const [isValue, setIsValue] = useState({
		fullname: true,
		mobileno: true,
		emailid: true,
		refrence: true,
		inquiry: true,
		message: true,
	});
	const [formValue, setFormValue] = useState({
		fullname: "",
		mobileno: "",
		emailid: "",
		refrence: "",
		inquiry: "",
		message: "",
	});
	// console.log(formValue);

	const handleFocus = (e) => {
		setIsFocusedValue((prev) => ({ ...prev, [e.target.id]: true }));
		// setIsValue((prev) => ({ ...prev, [e.target.id]: false }));
	};

	const handleBlur = (e) => {
		if (e.target.id === "fullname") {
			const nameRegex = /^[a-zA-Z ]{3,30}$/;
			if (nameRegex.test(e.target.value)) {
				e.target.value === "" && setIsFocusedValue((prev) => ({ ...prev, [e.target.id]: false }));
				setIsValue((prev) => ({ ...prev, [e.target.id]: true }));
			} else {
				e.target.value === "" && setIsFocusedValue((prev) => ({ ...prev, [e.target.id]: false }));
				setIsValue((prev) => ({ ...prev, [e.target.id]: false }));
			}
		} else if (e.target.id === "emailid") {
			const emailRegex = /^[a-zA-Z0-9. _%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
			if (emailRegex.test(e.target.value)) {
				e.target.value === "" && setIsFocusedValue((prev) => ({ ...prev, [e.target.id]: false }));
				setIsValue((prev) => ({ ...prev, [e.target.id]: true }));
			} else {
				e.target.value === "" && setIsFocusedValue((prev) => ({ ...prev, [e.target.id]: false }));
				setIsValue((prev) => ({ ...prev, [e.target.id]: false }));
			}
		} else if (e.target.id === "mobileno") {
			const moRegex = /^[0-9]{10}$/;
			if (moRegex.test(e.target.value)) {
				e.target.value === "" && setIsFocusedValue((prev) => ({ ...prev, [e.target.id]: false }));
				setIsValue((prev) => ({ ...prev, [e.target.id]: true }));
			} else {
				e.target.value === "" && setIsFocusedValue((prev) => ({ ...prev, [e.target.id]: false }));
				setIsValue((prev) => ({ ...prev, [e.target.id]: false }));
			}
		} else if (e.target.id === "ifor") {
			// const textRegex = /^.{20,200}$/;
			if (e.target.value === "franchise" || e.target.value === "Admission") {
				// setIsFocusedValue((prev) => ({ ...prev, [e.target.id]: false }));
				setIsValue((prev) => ({ ...prev, inquiry: true }));
			} else {
				// setIsFocusedValue((prev) => ({ ...prev, [e.target.id]: false }));
				setIsValue((prev) => ({ ...prev, inquiry: false }));
			}
		} else if (e.target.id === "message") {
			const textRegex = /^.{20,200}$/;
			if (textRegex.test(e.target.value)) {
				e.target.value === "" && setIsFocusedValue((prev) => ({ ...prev, [e.target.id]: false }));
				setIsValue((prev) => ({ ...prev, [e.target.id]: true }));
			} else {
				e.target.value === "" && setIsFocusedValue((prev) => ({ ...prev, [e.target.id]: false }));
				setIsValue((prev) => ({ ...prev, [e.target.id]: false }));
			}
		}
		// else {
		// 	e.target.value === "" && setIsFocusedValue((prev) => ({ ...prev, [e.target.id]: false }));
		// }
	};

	const handleChange = (e) => {
		if (e.target.id === "fullname") {
			const nameRegex = /^[a-zA-Z ]{1,30}$/;
			if (nameRegex.test(e.target.value) || e.target.value === "") {
				setFormValue((prev) => ({ ...prev, [e.target.id]: e.target.value }));
			}
		} else if (e.target.id === "mobileno") {
			const moRegex = /^\d{1,10}$/;
			if (moRegex.test(e.target.value) || e.target.value === "") {
				setFormValue((prev) => ({ ...prev, [e.target.id]: e.target.value }));
			}
		} else if (e.target.id === "emailid") {
			// const emailRegex = /^[a-zA-Z0-9. _%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
			// if (emailRegex.test(e.target.value) || e.target.value === "") {
			setFormValue((prev) => ({ ...prev, [e.target.id]: e.target.value }));
			// }
		} else if (e.target.id === "message") {
			const textRegex = /^.{0,200}$/;
			if (textRegex.test(e.target.value) || e.target.value === "") {
				setFormValue((prev) => ({ ...prev, [e.target.id]: e.target.value }));
			}
		}
	};

	// const refralOptions = [
	// 	{ value: "google", label: "Google" },
	// 	{ value: "social-media", label: "Social Media" },
	// 	{ value: "fnr", label: "Friends or Relatives" },
	// 	{ value: "students", label: "Any aStron Student" },
	// 	{ value: "other", label: "Other platform" },
	// ];

	const [isOpen, setIsOpen] = useState(false);
	// const [selectedValue, setSelectedValue] = useState(null);

	const toggleDropdown = () => {
		// setIsOpen(!isOpen);
		setIsOpen(true);
	};

	const handleInquiry = (option) => {
		setFormValue((prev) => ({ ...prev, inquiry: option }));
		setIsFocusedValue((prev) => ({ ...prev, inquiry: true }));
		setIsValue((prev) => ({ ...prev, inquiry: true }));
		setIsOpen(false);
	};

	const handleSubmit = (e) => {
		setLoading(true);
		const anyFalse = Object.values(isValue).includes(false);
		if ((!anyFalse && formValue.inquiry === "franchise") || formValue.inquiry === "Admission") {
			const data = {
				full_name: formValue.fullname,
				mobile_number: formValue.mobileno,
				email_id: formValue.emailid,
				enquiry_for: formValue.inquiry,
				description: formValue.message,
			};

			fetch("https://astronmathsacademy.com/api/enquiry.php", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(data),
			})
				.then((response) => response.json())
				.then((result) => {
					console.log(JSON.stringify(result));
					alert("Successfully submitted!");
				})
				.then(() => {
					setFormValue({
						fullname: "",
						mobileno: "",
						emailid: "",
						refrence: "",
						inquiry: "",
						message: "",
					});

					setIsValue({
						fullname: true,
						mobileno: true,
						emailid: true,
						refrence: true,
						inquiry: true,
						message: true,
					});

					setIsFocusedValue({
						fullname: false,
						mobileno: false,
						emailid: false,
						refrence: false,
						inquiry: false,
						message: false,
					});
					setLoading(false);
				})
				.catch((error) => {
					console.error("Error:", error);
					setLoading(false);
					if (navigator.onLine){
						alert("Something went wrong, Please try again!");
					} else {
						alert("Look like, you are Offline !");
					}
				});
		} else {
			alert("Invalid Data, Please recheck the form!");
			setLoading(false);
		}
	};

	// useEffect(() => {
	// 	inputdrop.current?.addEventListener("blur", function () {
	// 		// setIsOpen(false);
	// 	});
	// 	return () => {
	// 		inputdrop.current?.removeEventListener("blur", handleBlur);
	// 	};
	// }, []);

	useEffect(() => {
		if (formQString === "yf") {
			handleInquiry("franchise");
		}
	}, [formQString]);

	return (
		<div className="formWrapper">
			<div className="form-title">
				<h5> {formQString === "yf" ? "Franchise Inquiry Form" : "Inquiry Form"}</h5>
				{formQString === "yf-dialog" && (
					<Link to="/franchise">
						<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24px" height="24px" viewBox="0 0 30 30">
							<path d="M 7 4 C 6.744125 4 6.4879687 4.0974687 6.2929688 4.2929688 L 4.2929688 6.2929688 C 3.9019687 6.6839688 3.9019687 7.3170313 4.2929688 7.7070312 L 11.585938 15 L 4.2929688 22.292969 C 3.9019687 22.683969 3.9019687 23.317031 4.2929688 23.707031 L 6.2929688 25.707031 C 6.6839688 26.098031 7.3170313 26.098031 7.7070312 25.707031 L 15 18.414062 L 22.292969 25.707031 C 22.682969 26.098031 23.317031 26.098031 23.707031 25.707031 L 25.707031 23.707031 C 26.098031 23.316031 26.098031 22.682969 25.707031 22.292969 L 18.414062 15 L 25.707031 7.7070312 C 26.098031 7.3170312 26.098031 6.6829688 25.707031 6.2929688 L 23.707031 4.2929688 C 23.316031 3.9019687 22.682969 3.9019687 22.292969 4.2929688 L 15 11.585938 L 7.7070312 4.2929688 C 7.5115312 4.0974687 7.255875 4 7 4 z"></path>
						</svg>
					</Link>
				)}
			</div>
			<div className="input-block">
				<div className="input-container">
					<input type={"text"} id={"fullname"} onFocus={(e) => handleFocus(e)} onBlur={handleBlur} onChange={handleChange} className="input-field" value={formValue.fullname} />
					<label htmlFor={"fullname"} className={`floating-label ${isFocusedValue.fullname ? "focused" : ""}`}>
						{"Full name *"}
					</label>
				</div>
				<p className={isValue.fullname ? "" : "warn"}>Required - Min. 3 Character</p>
			</div>
			<div className="input-block">
				<div className="input-container">
					<input type={"text"} id={"mobileno"} onFocus={(e) => handleFocus(e)} onBlur={handleBlur} onChange={handleChange} className="input-field" value={formValue.mobileno} />
					<label htmlFor={"mobileno"} className={`floating-label ${isFocusedValue.mobileno ? "focused" : ""}`}>
						{"Mobile No. *"}
					</label>
				</div>
				<p className={isValue.mobileno ? "" : "warn"}>Required - 10 Digit Mobile No.</p>
			</div>

			<div className="input-block">
				<div className="input-container">
					<input type={"text"} id={"emailid"} onFocus={(e) => handleFocus(e)} onBlur={handleBlur} onChange={handleChange} className="input-field" value={formValue.emailid} />
					<label htmlFor={"emailid"} className={`floating-label ${isFocusedValue.emailid ? "focused" : ""}`}>
						{"Email Address *"}
					</label>
				</div>
				<p className={isValue.emailid ? "" : "warn"}>Required - Valid Email ID</p>
			</div>

			{formQString !== "yf" && (
				<div className="input-block">
					<div className="input-drop-container input-container">
						<input type={"text"} id={"ifor"} onFocus={toggleDropdown} onBlur={handleBlur} className="input-field" defaultValue={formValue.inquiry} /* value={formValue.inquiry} */ readOnly />
						<label htmlFor={"ifor"} className={`floating-label ${isFocusedValue.inquiry ? "focused" : ""}`}>
							{"Inquiry for*"}
						</label>
						{/* <button id={"ifor"} className="dropdown-button" onClick={toggleDropdown}>
						{formValue.inquiry || " "}
					</button> */}
						<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={`${isOpen ? "rotate" : ""}`}>
							<g id="SVGRepo_iconCarrier">
								<path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"></path>
							</g>
						</svg>
						{isOpen && (
							<ul className="dropdown-list">
								<li onClick={() => handleInquiry("Admission")}>{"Admission"}</li>
								<li onClick={() => handleInquiry("franchise")}>{"franchise"}</li>
							</ul>
						)}
					</div>
					<p className={isValue.inquiry ? "" : "warn"}>Required - select at least one option</p>
				</div>
			)}

			<div className="input-block">
				<div className="input-container">
					<textarea id={"message"} onFocus={(e) => handleFocus(e)} onBlur={handleBlur} onChange={handleChange} className="input-field" value={formValue.message} rows={3} resize={"none"} />
					<label htmlFor={"message"} className={`floating-label ${isFocusedValue.message ? "focused" : ""}`}>
						{formQString === "yf" ? "Short message regarding franchise *" : "Message *"}
					</label>
				</div>
				<p className={isValue.message ? "" : "warn"}>Required - short message | Min. 20 character</p>
			</div>
			<button onClick={() => handleSubmit()} disabled={isLoading} style={{cursor: isLoading && 'not-allowed'}}> {!isLoading ? "Submit" : <div className="loader"></div>} </button>
		</div>
	);
};

export default ContactForm;
