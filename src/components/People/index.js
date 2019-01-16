import React from "react";
import { Element } from "react-scroll";

import Header from "../universal/Section";
import board_icon from "./board.svg";
import other_people_icon from "./otherPeople.svg";
import "./people.scss";

const Person = (name, subtitle, image, linkedIn, github) => {
	return (
		<div className="person-wrapper">
			<div className="person-name">{name}</div>
			<div className="person-subtitle">{subtitle}</div>
			<div className="person-card">
				<img src={image} className="person-image" />
				{linkedIn && (
					<a href={linkedIn} className="person-linkedin">
						<img
							src={require("../../assets/linkedInOverlay.png")}
							className="person-linkedin-image"
						/>
					</a>
				)}
				{github && (
					<a href={linkedIn} className="person-github">
						<img
							src={require("../../assets/githubOverlay.png")}
							className="person-github-image"
						/>
					</a>
				)}
			</div>
		</div>
	);
};

const People = props => {
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

			<div className="subsection-wrapper">
				<img className="subsection-icon" src={other_people_icon} />
				<div className="subsection-subtitle">
					Sandbox is made possible by
					<br />
					interested and engaged students
				</div>
			</div>
		</Element>
	);
};

export default People;
