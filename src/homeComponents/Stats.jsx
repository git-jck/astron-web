import React, { useRef, useEffect } from "react";

const Stats = () => {
    const yearRef = useRef();
    const studentRef = useRef();
	function animateValue(obj, start, end, duration) {
		let startTimestamp = null;
		const step = (timestamp) => {
			if (!startTimestamp) startTimestamp = timestamp;
			const progress = Math.min((timestamp - startTimestamp) / duration, 1);
			obj.innerHTML = Math.floor(progress * (end - start) + start) + ' +';
			if (progress < 1) {
				window.requestAnimationFrame(step);
			}
		};
		window.requestAnimationFrame(step);
	}

    useEffect(()=>{
        animateValue(yearRef.current, 0, 15, 1000);
        animateValue(studentRef.current, 0, 15000, 2000);
    }, []);
	return (
		<div className="statsWrapper">
			{/* <div className="gd"></div> */}
			{/* <div className="gd"></div> */}
			<div className="stats-container">
				<div className="stats-block">
					<div className="stats-number" ref={yearRef}> 15 </div>
					<div className="stats-title"> years of vedic Association</div>
				</div>
				<div className="stats-block">
					<div className="stats-number" ref={studentRef}> 15000 <span>+</span> </div>
					<div className="stats-title"> life tocuh</div>
				</div>
			</div>
			{/* <div className="gd"></div> */}
		</div>
	);
};

export default Stats;
