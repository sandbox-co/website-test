import React from "react";
import { InViewMonitor } from "react-inview-monitor";
import MtSvgLines from "react-mt-svg-lines";

const AnimatedSVG = ({ svg }) => (
	<InViewMonitor
		classNameNotInView="vis-hidden"
		classNameInView=""
		childPropsInView={{ animate: true }}
	>
		<MtSvgLines duration={1500} fade>
			{svg}
		</MtSvgLines>
	</InViewMonitor>
);

export default AnimatedSVG;
