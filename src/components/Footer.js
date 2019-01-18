import React from "react";
import { Parallax } from "react-scroll-parallax";
import EmailEntry from "./universal/EmailEntry";

const MOBILE_HEIGHT = 700;
const DESKTOP_HEIGHT = 520;

const Footer = ({ width }) => {
	const scalar = width >= 1000 ? 1.002 : 1.01;
	const line = Math.sqrt(Math.pow(width * scalar, 2) - Math.pow(width, 2));
	return (
		<div className="footer-container">
			<span className="footer-gradient-container">
				<svg
					width={width}
					height={width <= 950 ? MOBILE_HEIGHT : DESKTOP_HEIGHT}
					viewBox={`0 0 ${width} ${width <= 950 ? MOBILE_HEIGHT : DESKTOP_HEIGHT}`}
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
					<path
						d={`M0 ${line} L${width} 0 V${width <= 950 ? MOBILE_HEIGHT : DESKTOP_HEIGHT} H0 V170 Z`}
						fill="url(#paint0_linear)"
					/>
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
					height={width <= 950 ? 800 : 520}
					viewBox={`0 0 ${width} ${width <= 950 ? MOBILE_HEIGHT : DESKTOP_HEIGHT}`}
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<circle cx={width / 2} cy="250" r="12.5" fill="white" fillOpacity="0.1" />
				</svg>
			</Parallax>

			<div className="footer-content">
				<div className="footer-title">sandbox</div>
				<div className="footer-inner-content">
					<div className="footer-address">
						Sandbox @ Yale
						<br />
						254 Elm Street
						<br />
						New Haven, CT 06511
					</div>
					<div className="footer-email-section">
						<div className="footer-email-text">stay updated</div>
						<EmailEntry />
					</div>
					<div className="footer-links">
						<div className="footer-link" href="https://github.com/sandbox-co" target="_blank">
							<div className="footer-link-text">Github</div>
							<img className="footer-link-image" src={require("../assets/githubIcon.png")} alt="" />
						</div>
						<div className="footer-link" href="https://medium.com/yale-sandbox" target="_blank">
							<div className="footer-link-text">Medium</div>
							<img className="footer-link-image" src={require("../assets/mediumIcon.png")} alt="" />
						</div>
						<div className="footer-link">
							<div className="footer-link-text">YouTube</div>
							<img
								className="footer-link-image"
								src={require("../assets/youtubeIcon.png")}
								alt=""
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
