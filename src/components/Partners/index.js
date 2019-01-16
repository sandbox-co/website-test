import React from "react";
import { Element } from "react-scroll";

import Header from "../universal/Section";

const partners = [
	{
		img: require("../../assets/logos/googleLogo.png"),
		url: "https://google.com/"
	},
	{
		img: require("../../assets/logos/tsaiLogo.png"),
		url: "https://www.city.yale.edu/"
	}
];

const Tech = ({ url, img, i }) => (
	// <Parallax offsetYMin={`${50 * (i - 2)}px`} offsetYMax={`${-50 * (i - 2)}px`}>
	<div className="tech-container" onClick={() => window.open(url)}>
		<img className="logo" src={img} alt="loading" />
	</div>
	// </Parallax>
);

const Partners = props => {
	return (
		<Element className="section-container" name="partners-section">
			<Header title="sandbox partners" subtitle="we're powered by the best" />
			<div className={"stack-container"}>
				{partners.map((item, i) => (
					<Tech key={i} i={i} {...item} />
				))}
			</div>
		</Element>
	);
};

export default Partners;
