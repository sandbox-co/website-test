import React from "react";
import { Link } from "react-scroll";

const SectionLink = ({ to, title }) => {
	return (
		<Link
			className="sidebar-section"
			activeClass={`sidebar-section ${title}`}
			to={to}
			spy={true}
			smooth={true}
			// offset={-250}
			duration={500}
		>
			{title}
		</Link>
	);
};

const SideBar = props => {
	return (
		<div className="sidebar-container">
			<SectionLink to="about-section" title="ABOUT" />
			<SectionLink to="learn-section" title="LEARN" />
			<SectionLink to="events-section" title="EVENTS" />
			<SectionLink to="partners-section" title="PARTNERS" />
			<SectionLink to="people-section" title="PEOPLE" />
		</div>
	);
};

export default SideBar;
