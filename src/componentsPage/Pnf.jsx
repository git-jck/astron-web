import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Pnf = () => {
    const navigate = useNavigate();
    useEffect(() => {
        const timeID = setTimeout(()=> {
            navigate(-1);
        }, 5000);

        return ()=> clearTimeout(timeID);
    },[]);

	return (
		<div className="pnfWrapper">
			<div className="pnf-container">
				<h1>404: Page not found</h1>
                <p>Redirect you to the home page in 5 sec....</p>
			</div>
		</div>
	);
};

export default Pnf;
