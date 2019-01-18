import React from "react";
import { Element } from "react-scroll";
import { Parallax } from "react-scroll-parallax";
import { FaArrowRight } from "react-icons/fa";

import "./learn.scss";

import Header from "../universal/Header";

import clouds from "./clouds.svg";
import social_card from "./social_card.svg";
import todo from "./todo.svg";

import learn_icon from "./learn_icon.svg";
import projects_icon from "./projects_icon.svg";

const projects = [
	{
		caption: "Social Card",
		img: require("./social_card.svg"),
		url: "https://github.com/sandbox-co/social-card"
	},
	{
		caption: "Weather App",
		img: require("./clouds.svg"),
		url: "https://github.com/sandbox-co/weather-app"
	},
	{
		caption: "Todo App",
		img: require("./todo.svg"),
		url: "https://github.com/sandbox-co/todo-starter"
	}
];

const stack = [
	{
		title: "React",
		img: require("../../assets/logos/reactLogo.png"),
		url: "https://reactjs.org/"
	},
	{
		title: "Redux",
		img: require("../../assets/logos/reduxLogo.png"),
		url: "https://redux.js.org/"
	},
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
		title: "Sentry",
		img: require("../../assets/logos/sentryLogo.png"),
		url: "https://sentry.io/welcome/"
	},
	{
		title: "Slack",
		img: require("../../assets/logos/slackLogo.png"),
		url: "https://slack.com/"
	},
	{
		title: "Stripe",
		img: require("../../assets/logos/stripeLogo.png"),
		url: "https://stripe.com/"
	},
	{
		title: "mongoDB",
		img: require("../../assets/logos/mongoLogo.png"),
		url: "https://www.mongodb.com/"
	},
	{
		title: "NodeJS",
		img: require("../../assets/logos/nodeLogo.png"),
		url: "https://nodejs.org/en/"
	}
];

const Tech = ({ title, url, img, i }) => (
	// <Parallax offsetYMin={`${50 * (i - 2)}px`} offsetYMax={`${-50 * (i - 2)}px`}>
	<div className="tech-container" onClick={() => window.open(url)}>
		<img className="logo" src={img} alt="loading" />
		<div className="caption space-top">{title}</div>
	</div>
	// </Parallax>
);

const Project = ({ caption, img, url, i }) => (
	<div key={i} className="project-container" onClick={() => window.open(url)}>
		<img className="project-icon" src={img} alt="" />
		<div className="caption space-top">{caption}</div>
	</div>
);

const Learn = props => (
	<Element className="section-container" name="learn-section">
		<Header title="sandbox learn" subtitle="technical bootcamp for students" />

		<div className="subsection-wrapper">
			<img className="subsection-icon" src={learn_icon} alt="" />
			<div className="subsection-subtitle">Learn the stack used by the top tech companies</div>
		</div>

		<Parallax offsetYMin={"0px"} offsetYMax={"50px"}>
			<div className={"stack-container"}>
				{stack.map((item, i) => (
					<Tech key={i} i={i} {...item} />
				))}
			</div>
		</Parallax>

		<div className="subsection-wrapper">
			<img className="subsection-icon" src={projects_icon} alt="" />
			<div className="subsection-subtitle">With projects that are fun and experiential</div>
		</div>

		<Parallax offsetYMin={"0px"} offsetYMax={"50px"}>
			<div className="projects-container">
				{projects.map((item, i) => (
					<Project key={i} i={i} {...item} />
				))}
			</div>
		</Parallax>

		<div className="action">
			see the curriculum
			<img src={require("../../assets/learnArrow.png")} alt="" className="action-arrow" />
		</div>
	</Element>
);

export default Learn;
