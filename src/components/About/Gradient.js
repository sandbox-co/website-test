import React from "react";

const Gradient = ({ width }) => {
	const max_height = 650;
	const min_height = 320;
	const max_width = 1920;
	const min_width = 400;
	const height =
		((width - min_width) * (max_height - min_height)) / (max_width - min_width) + min_height;

	const line = Math.sqrt(Math.pow(width * 1.01, 2) - Math.pow(width, 2));
	return (
		<span className="gradient-container">
			<svg width={width} height={height} fill="none" xmlns="http://www.w3.org/2000/svg">
				<path
					d={`M0 ${height} L${width} ${height - line} V0 L0 ${line} Z`}
					fill="url(#about_radial)"
				/>
				<path d={`M0 ${height} H${width} V${height - line} Z`} fill="white" />
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
};

// <path d={`M0 ${height} H${width} V200 Z`} fill="white" />

export default Gradient;
