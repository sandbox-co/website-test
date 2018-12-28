import React from "react";

const Gradient = ({ width, height }) => (
	<span className="gradient-container">
		<svg
			width={width}
			height="650"
			viewBox={`0 0 ${width} 650`}
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path d={`M0 650 H${width} V200 Z`} fill="white" />
			<path d={`M0 200 V650 L${width} 450 V0 Z`} fill="url(#about_radial)" />
			<defs>
				<radialGradient
					id="about_radial"
					cx="0"
					cy="0"
					r="1"
					gradientUnits="userSpaceOnUse"
					gradientTransform="translate(727.308 323.288) rotate(-97.7837) scale(307.002 1560.83)"
				>
					<stop stop-color="#000AFD" />
					<stop offset="1" stop-color="#9554FF" />
				</radialGradient>
			</defs>
		</svg>
	</span>
);

export default Gradient;
