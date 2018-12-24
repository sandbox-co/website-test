import React from "react";
import { Parallax } from "react-scroll-parallax";
import { Link } from "react-scroll";

const SectionLink = ({ to, title }) => {
	return (
		<Link
			className="sidebar-section"
			activeClass="sidebar-section active"
			to={to}
			spy={true}
			smooth={true}
			// offset={50}
			duration={500}
		>
			{title}
		</Link>
	);
};

const SideBar = props => {
	return (
		<div className="sidebar-container">
			<div className="section-title-container">
				<SectionLink to="about-section" title="ABOUT" />
				<SectionLink to="learn-section" title="LEARN" />
				<SectionLink to="events-section" title="EVENTS" />
				<SectionLink to="partners-section" title="PARTNERS" />
				<SectionLink to="people-section" title="PEOPLE" />
			</div>
		</div>
	);
};

export default SideBar;