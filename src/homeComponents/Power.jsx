import React from "react";

const Power = ({vidsrc, context}) => {
	return (
		<div className="powerWrapper">
			<div className="gd"></div>
			<div className="power-container default-container">
				<div className="video">
					<video controls>
						<source src={`${vidsrc}`} type="video/mp4" />
						Your browser does not support video format.
					</video>
				</div>
				{context !== 'modi' && <p className="video-caption">Raghav, a 9th grade student performing 7 digits by 7 digits division in less than a minute, with the help of Vedic mathematics.</p>}
				{context === 'modi' && <p className="video-caption">Our honorable PM Shri Narendra Modiji also promoted Vedic Mathematics for better and faster calculation to a student of 12th standard during the program 'Mann ki Baat' on 26 July 2020.</p>}
			</div>
			<div className="gd"></div>
		</div>
	);
};

export default Power;
