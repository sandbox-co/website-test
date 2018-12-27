import React from "react";
import { Parallax } from "react-scroll-parallax";

const Footer = () => (
	<div className="footer-container">
		<div className="footer-gradient">
			<Parallax
				offsetYMax={"50px"}
				offsetYMin={"-50px"}
				offsetXMax={"25px"}
				offsetXMin={"-25px"}
				slowerScrollRate
			>
				<div className="dot" />
			</Parallax>
			<Parallax offsetYMax={"75px"} offsetYMin={"-75px"} offsetXMax={"50px"} offsetXMin={"-50px"}>
				<div className="dot2" />
			</Parallax>
			<Parallax offsetYMax={"200px"} offsetYMin={"-100px"} offsetXMax={"25px"} offsetXMin={"-25px"}>
				<div className="dot3" />
			</Parallax>
			<Parallax
				offsetYMax={"100px"}
				offsetYMin={"-100px"}
				offsetXMax={"75px"}
				offsetXMin={"-75px"}
				slowerScrollRate
			>
				<div className="dot4" />
			</Parallax>
			<Parallax offsetYMax={"100px"} offsetYMin={"-100px"} offsetXMax={"25px"} offsetXMin={"-25px"}>
				<div className="dot5" />
			</Parallax>
		</div>
	</div>
);

export default Footer;
