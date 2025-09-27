import React from "react";
// import { Link, useSearchParams } from "react-router-dom";
import ContactForm from "../miniComponent/ContactForm";

const Franchise = () => {
	// const [qstring] = useSearchParams();
	// console.log(qstring.get("form"));
	// const formQString = qstring.get("form");

	return (
		<div className="franchiseWrapper">
			{/* <div className="gd"></div> */}
			<div className="content-img">
				<img src="/astronDemo images/franchise-slider1.jpg" alt="" />
			</div>
			<div className="franchise-container default-container default-container-height">
				<div className="franchise-intro">
					<h5> Become an Edupreneur</h5>
					{/* <p>Join the Legacy of Excellence - Become an Astron Maths Academy franchise.</p> */}
					{/* <p>Step Into a Legacy of Excellence -Start Your Vedic Maths Franchise with Astron Maths Academy</p> */}
					<p>Step Into a Legacy of Excellence - Join the Astron Maths Academy Franchise Network - A Trusted Name in Vedic Maths Education.</p>

					{/* <p>Since its inception in 2008, Astron Maths Academy has established itself as a trusted name in math education, empowering students across various age groups with strong mathematical skills and critical thinking abilities.</p> */}
					<p>
						Since 2008, Astron Maths Academy has become a leading name in mathematics education, trusted by thousands of parents and students across India. With a proven track record in Vedic Maths training, our academy has empowered learners of all age groups by enhancing their mathematical skills,
						logical thinking, and confidence through our innovative approach.
					</p>

					{/* <p>As a franchise partner, you'll bring to your community a unique educational approach that blends over 30 interactive puzzles and games into every student's learning experience.</p> */}
					<p>
						Now, you have the opportunity to own a Vedic Mathematics Franchise and bring this powerful learning model to your city. Our unique curriculum combines over 30 interactive puzzles, games, and hands-on activities that make learning maths exciting, engaging, and effective. These elements
						foster essential skills like logic, creativity, and problem-solving in every child
					</p>

					{/* <p>Vedic mathematics can come to the rescue for this lack of numeracy where you can play a pivotal role in getting the best out of the students and rising India's numeracy level.</p> */}
					<p>
						Astron Maths Academy stands apart with its experiential and conceptual teaching methods, moving far beyond traditional rote learning. Our structured program nurtures deep understanding, strengthens analytical thinking, and instills a lasting love for maths, right from the early years.
					</p>
					<p>
						Whether you're working with young children or coaching students preparing for competitive exams, our Vedic Maths business opportunity provides a strong foundation, ongoing support, and the power of a respected brand name. By becoming a franchise partner, you're not only building a
						successful education business—you're also transforming lives through the magic of mathematics.
					</p>

					{/* <p>Our honorable PM Shri Narendra Modiji also promoted Vedic Mathematics for better and faster calculation to a student of 12th standard during the program 'Mann ki Baat' on 26 July 2020.</p> */}

					{/* <div className="video">
						<video controls>
							<source src="/astronOriginal/vedic modi.mp4" type="video/mp4" />
							Your browser does not support video format.
						</video>
					</div> */}
				</div>

				<div className="gd"></div>

				<div className="reason-block">
					{/* <h5>Reasons to become a Astron Maths Academy Franchise Owner</h5> */}
					<h5>Why Choose Astron Maths Academy as Your Franchise Partner?</h5>
					<div className="reason-point">
						<p>Turn “Math Fear” into Math Fun</p>
						<p>We help students overcome math anxiety with hands-on learning that's enjoyable and effective.</p>
					</div>
					<div className="reason-point">
						<p>Teach with Mind-Boosting Games & Puzzles</p>
						<p>Over 30+ interactive games and logic puzzles sharpen memory, focus, and critical thinking—making math a joy, not a chore</p>
					</div>
					<div className="reason-point">
						<p>The Only Institute with a Money-Back Guarantee</p>
						<p>We're so confident in our results, we offer a money-back guarantee on all courses—unmatched in the industry</p>
					</div>
					<div className="reason-point">
						<p>100% Result-Oriented System</p>
						<p>Every student sees real improvement in speed, accuracy, and conceptual clarity—our success rate speaks for itself.</p>
					</div>
					<div className="reason-point">
						<p>Highest Student Retention in the Segment</p>
						<p>Once students join Astron, they stay. Our programs are designed to keep them excited and progressing every step of the way</p>
					</div>
					<div className="reason-point">
						<p>Parent & Student Satisfaction at Its Peak</p>
						<p>Our regular updates, progress reports, and visible outcomes win the trust of both parents and children.</p>
					</div>
					<div className="reason-point">
						<p>Best After-School Program for Grades 2 to 8</p>
						<p>Astron Maths is not just tuition—it's a brain-building, life-skill-enhancing after-school experi</p>
					</div>
					<div className="reason-point">
						<p>Low Investment, High Returns</p>
						<p>Start your center with minimal upfront cost and scale quickly with a highly profitable mode.</p>
					</div>
					<div className="reason-point">
						<p>Low Royalty = Higher Earnings for You</p>
						<p>Unlike many other franchises, we keep royalty fees low so our partners earn more.</p>
					</div>
					<div className="reason-point">
						<p>Taught Beyond Textbooks</p>
						<p>We focus on practical, real-world math that's often missing in schools—so kids build skills they can actually use.</p>
					</div>
					<div className="reason-point">
						<p>Future-Ready Skill Development</p>
						<p>From Olympiad prep to mental math mastery, our courses equip kids for exams and life.</p>
					</div>
					<div className="reason-point">
						<p>Aligned with India's NEP 2020</p>
						<p>The National Education Policy promotes foundational numeracy and Vedic Maths—we're already ahead of the curve.</p>
					</div>
					<div className="reason-point">
						<p>Untapped Market Opportunity</p>
						<p>With rising demand for non-traditional learning, there's huge potential for growth in every city and town.</p>
					</div>
					<div className="reason-point">
						<p>Personalised Training & Strong Support</p>
						<p>You'll receive comprehensive onboarding, teaching material, and continuous franchise support from our expert team.</p>
					</div>
					<div className="reason-point">
						<p>Be a Change-Maker in Education</p>
						<p>More than a business—it's a movement to transform how math is taught and learned across India</p>
					</div>
				</div>
				<div className="gd"></div>
				<div className="franchise-form-block">
					<div className="form-img">
						<img src="/astronDemo images/7338017.jpg" alt="" />
					</div>
					<div className="form">
						<ContactForm formtype="yf" />
					</div>
				</div>
			</div>

			{/* <div className="gd"></div>
			<div className="franchise-form">
				For more details Direct call or whatsapp | <Link to="/franchise?form=yf">Click here - for Inquiry</Link>
			</div> */}
			<div className="gd"></div>
			{/* {formQString === "yf" && (
				<div className="franchiseFormWrapper">
					<div className="form-box">
						<ContactForm />
					</div>
				</div>
			)} */}
		</div>
	);
};

export default Franchise;
