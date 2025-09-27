import React from "react";
import { Link } from "react-router-dom";

const TestimonialV = () => {
	return (
		<div className="testimonialVWrapper">
			<div className="testimonialV-container">
				<div className="content-block">
					<div className="content">
						<video controls>
							<source src="/astronOriginal/vt1.mp4" type="video/mp4" />
							Your browser does not support video format.
						</video>
					</div>
					<div className="content">
						<video controls>
							<source src="/astronOriginal/vt2.mp4" type="video/mp4" />
							Your browser does not support video format.
						</video>
					</div>
					{/* <div className="content">
						<video controls>
							<source src="/astronOriginal/vt1.mp4" type="video/mp4" />
							Your browser does not support video format.
						</video>
					</div> */}
				</div>
				<div className="gd"></div>
			</div>
		</div>
	);
};

export default TestimonialV;
