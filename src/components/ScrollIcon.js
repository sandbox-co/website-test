import React from "react";
import { FaChevronDown } from "react-icons/fa";

import { Link } from "react-scroll";

const ScrollIcon = () => (
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
);

export default ScrollIcon;
