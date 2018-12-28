import React from "react";
import { Parallax } from "react-scroll-parallax";

const Gradient = ({ width, height }) => (
	<span className="gradient-container">
		<svg
			width={width}
			height="1750"
			viewBox={`0 0 ${width} 1750`}
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path d={`M0 0 L${width} 200 V1750 L0 1550 Z`} fill="url(#learn-radial)" />
			<defs>
				<radialGradient
					id="learn-radial"
					cx="0"
					cy="0"
					r="1"
					gradientUnits="userSpaceOnUse"
					gradientTransform="translate(720.586 883.801) rotate(-90) scale(1623.5 3416.95)"
				>
					<stop stop-color="#000AFD" />
					<stop offset="1" stop-color="#B517F5" />
				</radialGradient>
			</defs>
		</svg>
	</span>
);

export default Gradient;

