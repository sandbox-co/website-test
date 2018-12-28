import React from "react";
import { Element } from "react-scroll";
import { Parallax } from "react-scroll-parallax";

import "./events.scss";

import Gradient from "./Gradient";

const Events = ({ width, height }) => {
	return (
		<Element className="section-container" name="events-section">
			<Gradient width={width} height={height} />
			<div className="events-content-container">
				<div className="subtitle white">sandbox events</div>
				<div className="caption gray">we host hackathons and awesome guest speakers</div>
			</div>
		</Element>
	);
};

export default Events;
