import React from "react";
import CoursesCard from "./CoursesCard";

const Courses = () => {
	const coursesData = [
		{
			image: "/astronDemo images/vm kids edited.png",
			title: "Vedic Maths for Kids",
			grade: "Grades 2 to 5",
			desc: "A fun and engaging introduction to Vedic Maths that builds a strong mental math foundation through games, puzzles, and lightning-fast techniques.",
			btnDetails: "I am interested in Vedic Maths for Kids, please share me the further details, or you can call or message me for the same.",
		},
		{
			image: "/astronDemo images/vm teens edited.png",
			title: "Vedic Maths for Teens",
			grade: "Grades 5 & above",
			desc: "Tailored for middle schoolers, this program sharpens problem-solving speed, enhances accuracy, and boosts performance in school and competitive exams.",
			btnDetails: "I am interested in Vedic Maths for Teens, please share me the further details, or you can call or message me for the same.",
		},
		{
			image: "/astronDemo images/vm expert edited.png",
			title: "Vedic Maths Expert",
			grade: "Next level course",
			desc: "A deep-dive into advanced Vedic techniques—ideal for high school students and competitive exam aspirants aiming for speed, strategy, and accuracy",
			btnDetails: "I am interested in Vedic Maths Experts, please share me the further details, or you can call or message me for the same.",
		},
		{
			image: "/astronDemo images/vm reading edited.png",
			title: "Speed Reading Enhancement Program",
			grade: "Ages 13+",
			desc: "This course trains students to read 5x-10x faster while improving comprehension, focus, and retention—perfect for academic excellence in all subjects.",
			btnDetails: "I am interested in Speed Reading Enhancement Program, please share me the further details, or you can call or message me for the same.",
		},
		{
			image: "/astronDemo images/vm memory edited.png",
			title: "Master Memory Course",
			grade: "Ages 11+",
			desc: "Supercharge memory with powerful techniques for names, numbers, study material, and more. Ideal for students, professionals, and all competitive exam aspirants.",
			btnDetails: "I am interested in Master Memory Course, please share me the further details, or you can call or message me for the same.",
		},
	];
	return (
		<div className="coursesWrapper">
			<div className="gd"></div>
			<div className="courses-container default-container default-container-height">
				<div className="courses-slider">
					<img src="/astronDemo images/courses background.png" alt="our courses" />
					<img className="hang" src="/astronDemo images/courses.png" alt="" />
				</div>
				<p className="courses-slider-title">At Astron Maths Academy, we offer a powerful mix of programs that go beyond traditional learning, helping students unlock their full brain potential.</p>
				<div className="gd"></div>
				<div className="courses-block-grid">
					{coursesData.map((item, i) => {
						return <CoursesCard key={i} cd={item} />;
					})}
				</div>
				<div className="gd"></div>
			</div>
		</div>
	);
};

export default Courses;
