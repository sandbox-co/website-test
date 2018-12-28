import React from "react";
import { Element } from "react-scroll";
import { Parallax } from "react-scroll-parallax";

import "./events.scss";

import Section from "../universal/Section";
import Header from "../universal/Header";
import Gradient from "./Gradient";

const Events = ({ width, height }) => (
	<Element className="section-container" name="events-section">
		<Gradient width={width} height={height} />
		<div className="events-content-container">
			<Header
				light
				title="sandbox events"
				subtitle="we host hackathons and awesome guest speakers"
			/>
		</div>
	</Element>
);

// const Events = ({ width, height }) => (
// 	<Section
// 		name="events"
// 		title="sandbox events"
// 		subtitle="we host hackathons and awesome guest speakers"
// 		color="white"
// 	>
// 		<Gradient width={width} height={height} />
// 	</Section>
// );

export default Events;
