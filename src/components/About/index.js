import React from "react";
import { Element } from "react-scroll";
import { Parallax } from "react-scroll-parallax";

import "./about.scss";

// import AnimatedSVG from "../universal/AnimatedSVG";

const About = props => {
	return (
		<Element className="section-container" id="about" name="about-section">
			<div className="about-gradient-container">
				<div className="about-background-gradient">
					<Parallax offsetYMax={"50px"} offsetYMin={"-50px"} slowerScrollRate>
						<div className="about-dot" />
					</Parallax>
					<Parallax offsetYMax={"75px"} offsetYMin={"-75px"}>
						<div className="about-dot2" />
					</Parallax>
					<Parallax offsetYMax={"200px"} offsetYMin={"-100px"}>
						<div className="about-dot3" />
					</Parallax>
					<Parallax offsetYMax={"100px"} offsetYMin={"-100px"} slowerScrollRate>
						<div className="about-dot4" />
					</Parallax>
					<Parallax offsetYMax={"100px"} offsetYMin={"-100px"}>
						<div className="about-dot5" />
					</Parallax>
				</div>
				<Parallax
					className="subtitle white"
					offsetYMax={"-250px"}
					offsetYMin={"-425px"}
					slowerScrollRate
				>
					we turn creative students into technical superstars
				</Parallax>
			</div>
			<div className="about-description">
				<div className="title">Sandbox</div>- bridges the gap between Computer Science education and
				technical entrepreneurship
				<br />- empowers students to become founders
			</div>
		</Element>
	);
};

export default About;
