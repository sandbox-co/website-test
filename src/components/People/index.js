import React from "react";
import { Element } from "react-scroll";
import { Parallax } from "react-scroll-parallax";

import Header from "../universal/Section";
import board_icon from "./board.svg";
import other_people_icon from "./otherPeople.svg";
import "./people.scss";

const board_data = [
	{
		name: "Bryce Bjork",
		subtitle: "Head of sandbox organization",
		image: require("../../assets/people/bryce.jpg"),
		linkedIn: "https://www.linkedin.com/in/brycedbjork/",
		github: "https://github.com/brycedbjork"
	},
	{
		name: "Alexi Christakis",
		subtitle: "Head of sandbox development",
		image: require("../../assets/people/alexi.jpg"),
		linkedIn: "https://www.linkedin.com/in/alexi-christakis-b53b9214b/",
		github: "https://github.com/alexichristakis"
	},
	{
		name: "Lea Sparkman",
		subtitle: "Head of sandbox learn",
		image: require("../../assets/people/lea.jpg"),
		linkedIn: "https://www.linkedin.com/in/lea-sparkman/",
		github: "https://github.com/leaspark"
	}
];

const other_people_data = [
	{
		name: "Student 1",
		subtitle: "Cohort 1",
		image: require("../../assets/people/lea.jpg"),
		linkedIn: "https://www.linkedin.com/in/brycedbjork/",
		github: "https://github.com/brycedbjork"
	}
];

const Person = ({ name, subtitle, image, linkedIn, github }) => {
	return (
		<Parallax offsetYMin={"0px"} offsetYMax={"50px"}>
			<div className="person-wrapper">
				<div className="person-name">{name}</div>
				<div className="person-subtitle">{subtitle}</div>
				<div className="person-card">
					<img src={image} className="person-image" />
					{linkedIn && (
						<a href={linkedIn} className="person-link" target="_blank">
							<img
								src={require("../../assets/linkedInOverlay.png")}
								className="person-link-image"
							/>
						</a>
					)}
					{github && (
						<a href={github} className="person-link" target="_blank">
							<img
								src={require("../../assets/githubOverlay.png")}
								className="person-link-image"
							/>
						</a>
					)}
				</div>
			</div>
		</Parallax>
	);
};

const People = props => {
	let BoardPeople = board_data.map(person => {
		return <Person {...person} key={`person${person.name}`} />;
	});

	let OtherPeople = other_people_data.map(person => {
		return <Person {...person} key={`person${person.name}`} />;
	});

	return (
		<Element className="section-container" name="people-section">
			<Header
				title="sandbox people"
				subtitle="highly motivated and experienced students promoting technical entrepreneurship at Yale"
			/>

			<div className="subsection-wrapper">
				<img className="subsection-icon" src={board_icon} />
				<div className="subsection-subtitle">
					Our executive board provides
					<br />
					leadership and direction
				</div>
			</div>

			<div className="people-container">{BoardPeople}</div>

			<div className="subsection-wrapper">
				<img className="subsection-icon" src={other_people_icon} />
				<div className="subsection-subtitle">
					Sandbox is made possible by
					<br />
					interested and engaged students
				</div>
			</div>

			<div className="people-container">{OtherPeople}</div>
		</Element>
	);
};

export default People;
