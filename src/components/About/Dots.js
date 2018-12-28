import React from "react";
import { Parallax } from "react-scroll-parallax";

const Dots = ({ width, height }) => (
	<span className="dots-container">
		<Parallax
			className="dot"
			offsetYMax={"500px"}
			offsetYMin={"-50px"}
			offsetXMax={"25px"}
			offsetXMin={"-25px"}
			slowerScrollRate
		>
			<svg
				width={width}
				height="650"
				viewBox={`0 0 ${width} 650`}
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<circle cx={width / 2} cy="250" r="12.5" fill="white" fillOpacity="0.1" />
				<circle cx={(3 * width) / 4} cy="100" r="12.5" fill="white" fillOpacity="0.1" />
			</svg>
		</Parallax>
		<Parallax
			className="dot"
			offsetYMax={"50px"}
			offsetYMin={"-50px"}
			offsetXMax={"25px"}
			offsetXMin={"-25px"}
			slowerScrollRate
		>
			<svg
				width={width}
				height="650"
				viewBox={`0 0 ${width} 650`}
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<circle cx={width - 100} cy="10" r="10" fill="white" fillOpacity="0.1" />
				<circle cx="100" cy="150" r="25" fill="white" fillOpacity="0.1" />
			</svg>
		</Parallax>
		<Parallax
			className="dot"
			offsetYMax={"50px"}
			offsetYMin={"-50px"}
			offsetXMax={"25px"}
			offsetXMin={"-25px"}
			slowerScrollRate
		>
			<svg
				width={width}
				height="650"
				viewBox={`0 0 ${width} 650`}
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<circle cx={width - 100} cy="10" r="10" fill="white" fillOpacity="0.1" />
				<circle cx="100" cy="150" r="25" fill="white" fillOpacity="0.1" />
			</svg>
		</Parallax>
	</span>
);

export default Dots;
