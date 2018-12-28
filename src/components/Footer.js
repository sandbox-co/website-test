import React from "react";
import { Parallax } from "react-scroll-parallax";

const Footer = ({ width }) => (
	<div className="footer-container">
		<span className="footer-gradient-container">
			<svg
				width={width}
				height="520"
				viewBox={`0 0 ${width} 520`}
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<defs>
					<linearGradient
						id="paint0_linear"
						x1="720"
						y1="-84.6453"
						x2="720"
						y2="945.062"
						gradientUnits="userSpaceOnUse"
					>
						<stop stopColor="#000AFD" />
						<stop offset="1" stopColor="#B517F5" />
					</linearGradient>
				</defs>
				<path d={`M0 170 L${width} 0 V520 H0 V170 Z`} fill="url(#paint0_linear)" />
			</svg>
		</span>
		<Parallax
			offsetYMax={"50px"}
			offsetYMin={"-50px"}
			offsetXMax={"25px"}
			offsetXMin={"-25px"}
			slowerScrollRate
		>
			<svg
				width="50"
				height="50"
				viewBox="0 0 50 50"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<circle cx="25.0864" cy="25.3015" r="24.5" fill="white" fillOpacity="0.1" />
			</svg>
		</Parallax>
		<Parallax
			offsetYMax={"500px"}
			offsetYMin={"-50px"}
			offsetXMax={"25px"}
			offsetXMin={"-25px"}
			slowerScrollRate
		>
			<svg
				width={width}
				height="520"
				viewBox={`0 0 ${width} 520`}
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<circle cx={width / 2} cy="250" r="12.5" fill="white" fillOpacity="0.1" />
			</svg>
		</Parallax>
	</div>
);

export default Footer;
