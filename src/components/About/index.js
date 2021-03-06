import React from "react";
import { Element } from "react-scroll";
import { Parallax } from "react-scroll-parallax";
import { Link } from "react-scroll";
import { FaChevronDown } from "react-icons/fa";

import "./about.scss";

// import Section from "../universal/Section";
import Gradient from "./Gradient";
import Dots from "./Dots";

// import AnimatedSVG from "../universal/AnimatedSVG";

const About = ({ width, height }) => (
	<Element className="section-container" id="about" name="about-section">
		<Parallax offsetYMax={"400px"} offsetYMin={"-600px"}>
			<Link
				className="bouncy-div"
				to="about-section"
				spy={true}
				smooth={true}
				// offset={50}
				duration={500}
			>
				<FaChevronDown className="chevron" />
			</Link>
		</Parallax>
		<Gradient width={width} height={height} />
		<Dots width={width} height={height} />
		<Parallax className="catch-phrase" offsetYMax={"100px"} offsetYMin={"-400px"} slowerScrollRate>
			we turn creative students
			<br />
			into technical superstars
		</Parallax>
	</Element>
);

export default About;
