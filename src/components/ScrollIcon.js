import React from "react";
import { FaChevronDown } from "react-icons/fa";
import { Parallax } from "react-scroll-parallax";
import { Link } from "react-scroll";

const ScrollIcon = () => (
	<Link
		className={"bouncy-div"}
		to="about-section"
		spy={true}
		smooth={true}
		// offset={50}
		duration={500}
	>
		<div className={"chevron"}>
			<FaChevronDown />
		</div>
	</Link>
);

export default ScrollIcon;
