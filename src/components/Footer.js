import React from "react";
import { Parallax } from "react-scroll-parallax";

// const Footer = () => (
// 	<div className="footer-container">
// 		<div className="footer-gradient">
// 			<Parallax
// 				offsetYMax={"50px"}
// 				offsetYMin={"-50px"}
// 				offsetXMax={"25px"}
// 				offsetXMin={"-25px"}
// 				slowerScrollRate
// 			>
// 				<div className="dot" />
// 			</Parallax>
// 			<Parallax offsetYMax={"75px"} offsetYMin={"-75px"} offsetXMax={"50px"} offsetXMin={"-50px"}>
// 				<div className="dot2" />
// 			</Parallax>
// 			<Parallax offsetYMax={"200px"} offsetYMin={"-100px"} offsetXMax={"25px"} offsetXMin={"-25px"}>
// 				<div className="dot3" />
// 			</Parallax>
// 			<Parallax
// 				offsetYMax={"100px"}
// 				offsetYMin={"-100px"}
// 				offsetXMax={"75px"}
// 				offsetXMin={"-75px"}
// 				slowerScrollRate
// 			>
// 				<div className="dot4" />
// 			</Parallax>
// 			<Parallax offsetYMax={"100px"} offsetYMin={"-100px"} offsetXMax={"25px"} offsetXMin={"-25px"}>
// 				<div className="dot5" />
// 			</Parallax>
// 		</div>
// 	</div>
// );

const Footer = ({ width }) => (
	<div className="footer-container">
		<svg
			width={width}
			height="519"
			viewBox={`0 0 ${width} 519`}
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<defs>
				<linearGradient
					id="paint0_linear"
					// x1="720"
					// y1="-84.6453"
					// x2="720"
					// y2="945.062"
					gradientUnits="userSpaceOnUse"
				>
					<stop stop-color="#000AFD" />
					<stop offset="1" stop-color="#B517F5" />
				</linearGradient>
			</defs>
			<path d={`M0 166.066 L${width} 0 V729 H0 V166.066 Z`} fill="url(#paint0_linear)" />
		</svg>
	</div>
);

export default Footer;
