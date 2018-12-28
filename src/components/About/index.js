import React from "react";
import { Element } from "react-scroll";
import { Parallax } from "react-scroll-parallax";

import "./about.scss";

// import Section from "../universal/Section";
import Gradient from "./Gradient";
import Dots from "./Dots";

// import AnimatedSVG from "../universal/AnimatedSVG";

const About = ({ width, height }) => (
	<Element className="section-container" id="about" name="about-section">
		<Gradient width={width} height={height} />
		<Dots width={width} height={height} />
		<Parallax className="catch-phrase" offsetYMax={"0px"} offsetYMin={"-610px"} slowerScrollRate>
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

export default About;
