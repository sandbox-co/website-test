import React from "react";
import { Element } from "react-scroll";
import { Parallax } from "react-scroll-parallax";

import "./about.scss";

import AnimatedSVG from "../universal/AnimatedSVG";

const About = props => {
	return (
		<Element className="section-container" id="about" name="about-section">
			<div className="about-background-gradient">
				<Parallax offsetYMax={"50px"} offsetYMin={"-50px"} slowerScrollRate>
					<div className="about-dot" />
				</Parallax>
				<Parallax offsetYMax={"50px"} offsetYMin={"-50px"}>
					<div className="about-dot2" />
				</Parallax>
			</div>
			<Parallax
				className="subtitle white"
				offsetYMax={"200px"}
				offsetYMin={"-200px"}
				slowerScrollRate
			>
				<div style={{ height: "170px" }} />
				we turn creative students into technical superstars
			</Parallax>
		</Element>
	);
};

export default About;
