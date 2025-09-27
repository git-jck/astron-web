import { useMemo, useRef, useEffect, useState } from "react";

const Why = ({ whyref, obs, statrun }) => {
	const yearRef = useRef();
	const studentRef = useRef();
	const [statsTime, setTime] = useState(0);

	function replaceOnlyText(element, newText) {
		// Get all child nodes
		const nodes = element.childNodes;

		// Find text nodes (nodeType 3) that aren't just whitespace
		for (let node of nodes) {
			if (node.nodeType === Node.TEXT_NODE && node.textContent.trim() !== "") {
				node.textContent = newText;
				return; // Stop after first non-empty text node
			}
		}
		// If no text node found, create one
		element.prepend(document.createTextNode(newText));
	}

	function animateValue(obj, start, end, duration) {
		let startTimestamp = null;
		const step = (timestamp) => {
			if (!startTimestamp) startTimestamp = timestamp;
			const progress = Math.min((timestamp - startTimestamp) / duration, 1);
			// obj.innerText = Math.floor(progress * (end - start) + start);
			replaceOnlyText(obj, Math.floor(progress * (end - start) + start));
			if (progress < 1) {
				window.requestAnimationFrame(step);
			}
		};
		window.requestAnimationFrame(step);
	}

	// const computedValue = useMemo(() => {
	// 	console.log("umemo");
	// 	console.log(result);
	// 	result++
	// 	console.log(result);
	// 	console.log("umemo end");
	// 	return result;
	// }, [animateValue]); // intentionally omitting status to avoid infinite loop

	useEffect(() => {
		if (statrun && statsTime < 2) {
			animateValue(yearRef.current, 0, 15, 500);
			animateValue(studentRef.current, 0, 100, 1000);
			setTime(prev => ++prev);
		}
	}, [statrun]);

	useEffect(() => {
		if (whyref?.current) {
			obs.observe(whyref.current);
			// console.log("*******", obs);
		}
	}, []);

	return (
		<div className="whyWrapper">
			<div className="gd"></div>
			<div className="why-container default-container">
				<div className="content-block">
					<p className="why-title">Why Choose Us</p>
					<div className="points">
						<div className="point">
							<div className="p-icon">
								<svg viewBox="0 0 24 24" fill="none" stroke="#1C274C" strokeWidth="1.5" xmlns="http://www.w3.org/2000/svg">
									<circle opacity="0.5" cx="12" cy="12" r="10"></circle>
									<path d="M10.8613 9.36335C11.3679 8.45445 11.6213 8 12 8C12.3787 8 12.6321 8.45445 13.1387 9.36335L13.2698 9.59849C13.4138 9.85677 13.4858 9.98591 13.598 10.0711C13.7103 10.1563 13.8501 10.188 14.1296 10.2512L14.3842 10.3088C15.3681 10.5314 15.86 10.6427 15.977 11.0191C16.0941 11.3955 15.7587 11.7876 15.088 12.572L14.9144 12.7749C14.7238 12.9978 14.6285 13.1092 14.5857 13.2471C14.5428 13.385 14.5572 13.5336 14.586 13.831L14.6122 14.1018C14.7136 15.1482 14.7644 15.6715 14.4579 15.9041C14.1515 16.1367 13.6909 15.9246 12.7697 15.5005L12.5314 15.3907C12.2696 15.2702 12.1387 15.2099 12 15.2099C11.8613 15.2099 11.7304 15.2702 11.4686 15.3907L11.2303 15.5005C10.3091 15.9246 9.84847 16.1367 9.54206 15.9041C9.23565 15.6715 9.28635 15.1482 9.38776 14.1018L9.41399 13.831C9.44281 13.5336 9.45722 13.385 9.41435 13.2471C9.37147 13.1092 9.27617 12.9978 9.08557 12.7749L8.91204 12.572C8.2413 11.7876 7.90593 11.3955 8.02297 11.0191C8.14001 10.6427 8.63194 10.5314 9.61581 10.3088L9.87035 10.2512C10.1499 10.188 10.2897 10.1563 10.402 10.0711C10.5142 9.98591 10.5862 9.85677 10.7302 9.59849L10.8613 9.36335Z"></path>
								</svg>
							</div>
							<div className="p-content">
								Turn <b>Math Fear</b> into Math Fun
							</div>
						</div>
						<div className="point">
							<div className="p-icon">
								<svg viewBox="0 0 24 24" fill="none" stroke="#1C274C" strokeWidth="1.5" xmlns="http://www.w3.org/2000/svg">
									<circle opacity="0.5" cx="12" cy="12" r="10"></circle>
									<path d="M10.8613 9.36335C11.3679 8.45445 11.6213 8 12 8C12.3787 8 12.6321 8.45445 13.1387 9.36335L13.2698 9.59849C13.4138 9.85677 13.4858 9.98591 13.598 10.0711C13.7103 10.1563 13.8501 10.188 14.1296 10.2512L14.3842 10.3088C15.3681 10.5314 15.86 10.6427 15.977 11.0191C16.0941 11.3955 15.7587 11.7876 15.088 12.572L14.9144 12.7749C14.7238 12.9978 14.6285 13.1092 14.5857 13.2471C14.5428 13.385 14.5572 13.5336 14.586 13.831L14.6122 14.1018C14.7136 15.1482 14.7644 15.6715 14.4579 15.9041C14.1515 16.1367 13.6909 15.9246 12.7697 15.5005L12.5314 15.3907C12.2696 15.2702 12.1387 15.2099 12 15.2099C11.8613 15.2099 11.7304 15.2702 11.4686 15.3907L11.2303 15.5005C10.3091 15.9246 9.84847 16.1367 9.54206 15.9041C9.23565 15.6715 9.28635 15.1482 9.38776 14.1018L9.41399 13.831C9.44281 13.5336 9.45722 13.385 9.41435 13.2471C9.37147 13.1092 9.27617 12.9978 9.08557 12.7749L8.91204 12.572C8.2413 11.7876 7.90593 11.3955 8.02297 11.0191C8.14001 10.6427 8.63194 10.5314 9.61581 10.3088L9.87035 10.2512C10.1499 10.188 10.2897 10.1563 10.402 10.0711C10.5142 9.98591 10.5862 9.85677 10.7302 9.59849L10.8613 9.36335Z"></path>
								</svg>
							</div>
							<div className="p-content">Courses as per age.</div>
						</div>
						<div className="point">
							<div className="p-icon">
								<svg viewBox="0 0 24 24" fill="none" stroke="#1C274C" strokeWidth="1.5" xmlns="http://www.w3.org/2000/svg">
									<circle opacity="0.5" cx="12" cy="12" r="10"></circle>
									<path d="M10.8613 9.36335C11.3679 8.45445 11.6213 8 12 8C12.3787 8 12.6321 8.45445 13.1387 9.36335L13.2698 9.59849C13.4138 9.85677 13.4858 9.98591 13.598 10.0711C13.7103 10.1563 13.8501 10.188 14.1296 10.2512L14.3842 10.3088C15.3681 10.5314 15.86 10.6427 15.977 11.0191C16.0941 11.3955 15.7587 11.7876 15.088 12.572L14.9144 12.7749C14.7238 12.9978 14.6285 13.1092 14.5857 13.2471C14.5428 13.385 14.5572 13.5336 14.586 13.831L14.6122 14.1018C14.7136 15.1482 14.7644 15.6715 14.4579 15.9041C14.1515 16.1367 13.6909 15.9246 12.7697 15.5005L12.5314 15.3907C12.2696 15.2702 12.1387 15.2099 12 15.2099C11.8613 15.2099 11.7304 15.2702 11.4686 15.3907L11.2303 15.5005C10.3091 15.9246 9.84847 16.1367 9.54206 15.9041C9.23565 15.6715 9.28635 15.1482 9.38776 14.1018L9.41399 13.831C9.44281 13.5336 9.45722 13.385 9.41435 13.2471C9.37147 13.1092 9.27617 12.9978 9.08557 12.7749L8.91204 12.572C8.2413 11.7876 7.90593 11.3955 8.02297 11.0191C8.14001 10.6427 8.63194 10.5314 9.61581 10.3088L9.87035 10.2512C10.1499 10.188 10.2897 10.1563 10.402 10.0711C10.5142 9.98591 10.5862 9.85677 10.7302 9.59849L10.8613 9.36335Z"></path>
								</svg>
							</div>
							<div className="p-content">Mind-Boosting Games & Puzzles.</div>
						</div>
						<div className="point">
							<div className="p-icon">
								<svg viewBox="0 0 24 24" fill="none" stroke="#1C274C" strokeWidth="1.5" xmlns="http://www.w3.org/2000/svg">
									<circle opacity="0.5" cx="12" cy="12" r="10"></circle>
									<path d="M10.8613 9.36335C11.3679 8.45445 11.6213 8 12 8C12.3787 8 12.6321 8.45445 13.1387 9.36335L13.2698 9.59849C13.4138 9.85677 13.4858 9.98591 13.598 10.0711C13.7103 10.1563 13.8501 10.188 14.1296 10.2512L14.3842 10.3088C15.3681 10.5314 15.86 10.6427 15.977 11.0191C16.0941 11.3955 15.7587 11.7876 15.088 12.572L14.9144 12.7749C14.7238 12.9978 14.6285 13.1092 14.5857 13.2471C14.5428 13.385 14.5572 13.5336 14.586 13.831L14.6122 14.1018C14.7136 15.1482 14.7644 15.6715 14.4579 15.9041C14.1515 16.1367 13.6909 15.9246 12.7697 15.5005L12.5314 15.3907C12.2696 15.2702 12.1387 15.2099 12 15.2099C11.8613 15.2099 11.7304 15.2702 11.4686 15.3907L11.2303 15.5005C10.3091 15.9246 9.84847 16.1367 9.54206 15.9041C9.23565 15.6715 9.28635 15.1482 9.38776 14.1018L9.41399 13.831C9.44281 13.5336 9.45722 13.385 9.41435 13.2471C9.37147 13.1092 9.27617 12.9978 9.08557 12.7749L8.91204 12.572C8.2413 11.7876 7.90593 11.3955 8.02297 11.0191C8.14001 10.6427 8.63194 10.5314 9.61581 10.3088L9.87035 10.2512C10.1499 10.188 10.2897 10.1563 10.402 10.0711C10.5142 9.98591 10.5862 9.85677 10.7302 9.59849L10.8613 9.36335Z"></path>
								</svg>
							</div>
							<div className="p-content">Money-Back Guarantee.</div>
						</div>
					</div>
					<p className="desc">Whether your center caters to young learners or older students preparing for competitive exams, Astron Maths Academy provides a nurturing environment where every student can thrive.</p>
					<div className="stats-container" ref={whyref}>
						<div className="stats-block">
							<div className="stats-number" ref={yearRef}>
								15
							</div>
							<div className="stats-title"> years of vedic Association</div>
						</div>
						<div className="stats-block">
							<div className="stats-number" ref={studentRef}>
								0 <span> %</span>
							</div>
							<div className="stats-title"> Satisfaction Rate</div>
						</div>
					</div>
				</div>
				<div className="img-block">
					<img src="/astronDemo images/choose us.jpg" alt="astron-chooseus" />
				</div>
			</div>
			<div className="gd"></div>
		</div>
	);
};

export default Why;
