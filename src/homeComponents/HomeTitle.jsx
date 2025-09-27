import React from "react";
import "./homeTitle.scss";
// import styles from './Ht.module.scss';

const HomeTitle = (props) => {
    // const fs = "26px";
    // console.log('----', styles.myStyle);

    // const yesStyle = {
    //     'font-size': '36px',
    // }
	return (
        <>
        {/* <p className={JSON.parse('{...yesStyle}')}>Yes Jigar</p> */}
		<div className={"titleWrapper"}>
			<div className={props.titleColor==='y' ? "strip-yellow": "strip"}>
				<div className="title-strip">
					<div className="headTail"></div>
					<div className="title">{props.titleName}</div>
				</div>
			</div>
		</div>
        </>
	);
};

export default HomeTitle;
