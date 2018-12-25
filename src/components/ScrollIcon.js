import React from "react";
import { FaChevronDown } from "react-icons/fa";
import { Parallax } from "react-scroll-parallax";

const ScrollIcon = () => (
	<Parallax className={"bouncy-div"} offsetYMax={"75px"} offsetYMin={"-75px"} slowerScrollRate>
		<div className={"chevron"}>
			<FaChevronDown />
		</div>
	</Parallax>
);

export default ScrollIcon;
