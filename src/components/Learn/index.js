import React from "react";
import { Element } from "react-scroll";
import { Parallax } from "react-scroll-parallax";
import { FaArrowRight } from "react-icons/fa";

import "./learn.scss";

import clouds from "./clouds.svg";
import social_card from "./social_card.svg";
import todo from "./todo.svg";

const stack = [
	{ title: "React", img: require("../../assets/logos/reactLogo.png"), url: "https://reactjs.org/" },
	{
		title: "Figma",
		img: require("../../assets/logos/figmaLogo.png"),
		url: "https://www.figma.com/"
	},
	{
		title: "AWS",
		img: require("../../assets/logos/amazonLogo.png"),
		url: "https://aws.amazon.com/"
	},
	{
		title: "Firebase",
		img: require("../../assets/logos/firebaseLogo.png"),
		url: "https://firebase.google.com/"
	},
	{
		title: "Redux",
		img: require("../../assets/logos/reduxLogo.png"),
		url: "https://redux.js.org/"
	},
	{
		title: "Sentry",
		img: require("../../assets/logos/sentryLogo.png"),
		url: "https://sentry.io/welcome/"
	},
	{ title: "Slack", img: require("../../assets/logos/slackLogo.png"), url: "https://slack.com/" },
	{ title: "Stripe", img: require("../../assets/logos/stripeLogo.png"), url: "https://stripe.com/" }
];

const Tech = ({ title, url, img, i }) => (
	// <Parallax offsetYMin={`${50 * (i - 2)}px`} offsetYMax={`${-50 * (i - 2)}px`}>
	<div className="tech-container" onClick={() => window.open(url)}>
		<img className="logo" src={img} alt="loading" />
		<div className="caption space-top">{title}</div>
	</div>
	// </Parallax>
);

const Learn = props => {
	return (
		<Element className="section-container" id="learn" name="learn-section">
			<div className="learn-title-container">
				<div className="title section purple">
					learn
					<div className="caption">technical bootcamp for students</div>
				</div>
			</div>

			<div className="learn-title-section">
				<div className="title-graphic-container">
					<div className="stack-layer1" />
					<div className="stack-layer2" />
				</div>
				<div className="subtitle">learn the stack used by the top tech companies</div>
			</div>

			<Parallax offsetYMin={"-100px"} offsetYMax={"50px"}>
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

			<Parallax offsetYMin={"0px"} offsetYMax={"100px"}>
				<div className="projects-container">
					<div
						className="project-container"
						onClick={() => window.open("https://github.com/sandbox-co/social-card")}
					>
						<img className="project-background space-bottom" src={social_card} />
						<div className="caption space-top">Social Card</div>
					</div>
					<div
						className="project-container"
						onClick={() => window.open("https://github.com/sandbox-co/weather-app")}
					>
						<img className="project-background center" src={clouds} />
						<div className="caption space-top">Weather App</div>
					</div>
					<div
						className="project-container"
						onClick={() => window.open("https://github.com/sandbox-co/todo-starter")}
					>
						<img className="project-background center" src={todo} />
						<div className="caption space-top">Todo App</div>
					</div>
				</div>
			</Parallax>
			<div className="learn-footer-container subtitle purple">
				see the curriculum
				<FaArrowRight />
			</div>
		</Element>
	);
};

export default Learn;
