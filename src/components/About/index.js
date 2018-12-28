import React from "react";
import { Element } from "react-scroll";
import { Parallax } from "react-scroll-parallax";

import "./about.scss";

// import AnimatedSVG from "../universal/AnimatedSVG";

const About = ({ width, height }) => (
	<Element className="section-container" id="about" name="about-section">
		<div className="about-gradient-container">
			<svg
				width={width}
				height="650"
				viewBox={`0 0 ${width} 650`}
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path d={`M0 650 H${width} V200 Z`} fill="white" />
				<path d={`M0 200 V650 L${width} 450 V0 Z`} fill="url(#paint0_radial)" />
				<defs>
					<radialGradient
						id="paint0_radial"
						cx="0"
						cy="0"
						r="1"
						gradientUnits="userSpaceOnUse"
						gradientTransform="translate(727.308 323.288) rotate(-97.7837) scale(307.002 1560.83)"
					>
						<stop stop-color="#000AFD" />
						<stop offset="1" stop-color="#9554FF" />
					</radialGradient>
				</defs>
			</svg>
		</div>
		<Parallax
			className="subtitle white center absolute"
			offsetYMax={"0px"}
			offsetYMin={"-510px"}
			slowerScrollRate
		>
			we turn creative students into technical superstars
		</Parallax>
		<div className="about-description">
			<div className="title">Sandbox</div>
			<Parallax offsetXMax={"10px"} offsetXMin={"50px"}>
				- bridges the gap between Computer Science education and technical entrepreneurship
			</Parallax>
			<Parallax offsetXMax={"10px"} offsetXMin={"50px"}>
				- empowers students to become founders
			</Parallax>
		</div>
	</Element>
);

// const About = props => {
// 	return (
// 		<Element className="section-container" id="about" name="about-section">
// 			<div className="about-gradient-container">
// 				<div className="about-background-gradient">
// 					<Parallax
// 						offsetYMax={"50px"}
// 						offsetYMin={"-50px"}
// 						offsetXMax={"25px"}
// 						offsetXMin={"-25px"}
// 						slowerScrollRate
// 					>
// 						<div className="dot" />
// 					</Parallax>
// 					<Parallax
// 						offsetYMax={"75px"}
// 						offsetYMin={"-75px"}
// 						offsetXMax={"50px"}
// 						offsetXMin={"-50px"}
// 					>
// 						<div className="dot2" />
// 					</Parallax>
// 					<Parallax
// 						offsetYMax={"200px"}
// 						offsetYMin={"-100px"}
// 						offsetXMax={"25px"}
// 						offsetXMin={"-25px"}
// 					>
// 						<div className="dot3" />
// 					</Parallax>
// 					<Parallax
// 						offsetYMax={"100px"}
// 						offsetYMin={"-100px"}
// 						offsetXMax={"75px"}
// 						offsetXMin={"-75px"}
// 						slowerScrollRate
// 					>
// 						<div className="dot4" />
// 					</Parallax>
// 					<Parallax
// 						offsetYMax={"100px"}
// 						offsetYMin={"-100px"}
// 						offsetXMax={"25px"}
// 						offsetXMin={"-25px"}
// 					>
// 						<div className="dot5" />
// 					</Parallax>
// 				</div>
// 				<Parallax
// 					className="subtitle white"
// 					// offsetYMax={"-250px"}
// 					offsetYMax={"280px"}
// 					offsetYMin={"-425px"}
// 					slowerScrollRate
// 				>
// 					we turn creative students into technical superstars
// 				</Parallax>
// 			</div>
// 			<div className="about-description">
// 				<div className="title">Sandbox</div>
// 				<Parallax offsetXMax={"10px"} offsetXMin={"50px"}>
// 					- bridges the gap between Computer Science education and technical entrepreneurship
// 				</Parallax>
// 				<Parallax offsetXMax={"10px"} offsetXMin={"50px"}>
// 					- empowers students to become founders
// 				</Parallax>
// 			</div>
// 		</Element>
// 	);
// };

export default About;
