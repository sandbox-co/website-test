import React from "react";
import { Element } from "react-scroll";
import { Parallax } from "react-scroll-parallax";

import "./learn.scss";

const stack = [
	{ title: "React", img: require("../../assets/logos/reactLogo.png") },
	{ title: "Figma", img: require("../../assets/logos/figmaLogo.png") },
	{ title: "AWS", img: require("../../assets/logos/amazonLogo.png") },
	{ title: "Firebase", img: require("../../assets/logos/firebaseLogo.png") },
	{ title: "Redux", img: require("../../assets/logos/reduxLogo.png") },
	{ title: "Sentry", img: require("../../assets/logos/sentryLogo.png") },
	{ title: "Slack", img: require("../../assets/logos/slackLogo.png") },
	{ title: "Stripe", img: require("../../assets/logos/stripeLogo.png") }
];

const Tech = ({ title, img, i }) => (
	// <Parallax offsetYMin={`${50 * (i - 2)}px`} offsetYMax={`${-50 * (i - 2)}px`}>
	<div className="tech-container">
		<img className="logo" src={img} />
		<div className="tech-name">{title}</div>
	</div>
	// </Parallax>
);

const Learn = props => {
	return (
		<Element className="section-container" id="learn" name="learn-section">
			<div className="title section">learn the stack used by the top tech companies</div>
			<Parallax offsetYMin={"-100px"} offsetYMax={"100px"}>
				<div className={"stack-container"}>
					{stack.map((item, i) => (
						<Tech i={i} {...item} />
					))}
				</div>
			</Parallax>
		</Element>
	);
};

export default Learn;
