import React from "react";
import { Link } from "react-router-dom";

const CoursesCard = ({ cd }) => {
	const whatsAppBtn = (waContent) => {
		window.open("https://wa.me/919898259006", "_blank");
	};
	return (
		<div className="course-card">
			<div className="course-img-block">
				<img src={cd?.image} alt="course-img" />
			</div>
			<h3>{cd.title}</h3>
			<p className="course-whom">{cd?.grade}</p>
			<p className="course-detail">{cd?.desc}</p>
			<div className="btn-block">
				<Link to={`https://wa.me/919898259006?text=${cd?.btnDetails}`} target="_blank" className="course-btn-link">
					<img src="astron web icon/whatsapp.png" alt="" />
					<span>Inquiry</span>
				</Link>
				{/* <div></div> */}
			</div>
		</div>
	);
};

export default CoursesCard;
