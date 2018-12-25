import React from "react";
import { Element } from "react-scroll";
import { Parallax } from "react-scroll-parallax";

import "./learn.scss";

import clouds from "./clouds.svg";
import social_card from "./social_card.svg";
import todo from "./todo.svg";

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
		<img className="logo" src={img} alt="loading" />
		<div className="caption">{title}</div>
	</div>
	// </Parallax>
);

const Learn = props => {
	return (
		<Element className="section-container" id="learn" name="learn-section">
			<div className="learn-title-section">
				<div className="title-graphic-container">
					<div className="stack-layer1" />
					<div className="stack-layer2" />
				</div>
				<div className="subtitle">learn the stack used by the top tech companies</div>
			</div>

			<Parallax offsetYMin={"-300px"} offsetYMax={"300px"}>
				<div className={"stack-container"}>
					{stack.map((item, i) => (
						<Tech key={i} i={i} {...item} />
					))}
				</div>
			</Parallax>

			<div className="learn-title-section">
				<div className="project-icon-container">
					<div className="project-icon-layer1" />
					<div className="project-icon-layer2" />
					<div className="project-icon-layer3" />
				</div>
				<div className="subtitle">with projects that are fun and experiential</div>
			</div>

			<Parallax offsetYMin={"-200px"} offsetYMax={"300px"}>
				<div className="projects-container">
					<div className="project-container">
						<div className="project-background">
							<img src={social_card} />
						</div>
						<div className="caption">Social Card</div>
					</div>
					<div className="project-container">
						<div className="project-background center">
							<img src={clouds} />
						</div>
						<div className="caption">Weather App</div>
					</div>
					<div className="project-container">
						<div className="project-background center">
							<img src={todo} />
						</div>
						<div className="caption">Todo App</div>
					</div>
				</div>
			</Parallax>
		</Element>
	);
};

export default Learn;
