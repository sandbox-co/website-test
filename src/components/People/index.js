import React from "react";
import { Element } from "react-scroll";

import Header from "../universal/Section";

const People = props => {
	return (
		<Element className="section-container" name="people-section">
			<Header
				title="sandbox people"
				subtitle="highly motivated and experienced students promoting techincal entrepreneurship at Yale"
			/>
		</Element>
	);
};

export default People;
