import React from "react";
import { Link } from "react-router-dom";

const GalleryPictures = () => {
	return (
		<div className="galleryWrapper">
			<div className="gd"></div>
			<div className="gallery-container default-container">
				<div>
					<img src="/astronOriginal/class landscape.jpg" alt="astron-gallery" />
				</div>
				<div>
					<img src="/astronOriginal/gallery2.jpg" alt="astron-gallery" />
				</div>
				<div>
					<img src="/astronOriginal/gallery1.jpg" alt="astron-gallery" />
				</div>
				<div>
					<img src="/astronOriginal/learnwithfun.jpg" alt="astron-gallery" />
				</div>
				{/* <div>
					<img src="/astronOriginal/gallery3.jpg" alt="astron-gallery" />
				</div> */}
			</div>
			{/* <div className="new-container">
				<Link>View More Images +</Link>
			</div> */}
			<div className="gd"></div>
		</div>
	);
};

export default GalleryPictures;
