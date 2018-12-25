import React from "react";
import { Element } from "react-scroll";
import { Parallax } from "react-scroll-parallax";

import "./events.scss";

const Events = props => {
	return (
		<Element className="section-container" name="events-section">
			<div className="events-gradient-container">
				<div className="events-background">
					<Parallax
						offsetYMax={"50px"}
						offsetYMin={"-50px"}
						offsetXMax={"25px"}
						offsetXMin={"-25px"}
						slowerScrollRate
					>
						<div className="dot" />
					</Parallax>
					<Parallax
						offsetYMax={"75px"}
						offsetYMin={"-75px"}
						offsetXMax={"50px"}
						offsetXMin={"-50px"}
					>
						<div className="dot2" />
					</Parallax>
					<Parallax
						offsetYMax={"200px"}
						offsetYMin={"-100px"}
						offsetXMax={"25px"}
						offsetXMin={"-25px"}
					>
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
					<Parallax
						offsetYMax={"100px"}
						offsetYMin={"-100px"}
						offsetXMax={"25px"}
						offsetXMin={"-25px"}
					>
						<div className="dot5" />
					</Parallax>
				</div>
			</div>
			<div className="events-content-container">
				<div className="subtitle white">sandbox events</div>
				<div className="caption gray">we host hackathons and awesome guest speakers</div>
			</div>
		</Element>
	);
};

export default Events;
