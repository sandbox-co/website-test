import React from "react";
import { Element } from "react-scroll";

const Section = ({ name, children, title, subtitle, color = "black" }) => (
	<Element className="section-container" name={`${name}-section`}>
		<div className="section-title-container">
			<h1 className="section-title" style={{ color }}>
				{title}
			</h1>
			<h2 className="section-subtitle" style={{ color }}>
				{subtitle}
			</h2>
		</div>
		{children}
	</Element>
);

export default Section;
