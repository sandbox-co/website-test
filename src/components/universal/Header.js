import React from "react";
import classNames from "classnames";

const Header = ({ title, subtitle, light }) => (
	<div className="section-title-container">
		<h1 className={classNames("section-title", { light: light })}>{title}</h1>
		<h2 className={classNames("section-subtitle", { light: light })}>{subtitle}</h2>
	</div>
);

export default Header;
