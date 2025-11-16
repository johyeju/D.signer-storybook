import React from "react";
import {
	badgeIcons,
	IconName,
	BadgeIconProps,
} from "@components/icon/IconMapMaker";
import "./MapMaker.css";

interface MapMakerProps {
	size: "R" | "M" | "L";
	color?: string;
	iconName: IconName;
	theme?: "Green" | "Red" | "Blue";
	text?: "출발" | "도착";
}

const MapMaker: React.FC<MapMakerProps> = ({
	size,
	color,
	text,
	iconName,
	theme,
}) => {
	const SelectedIcon = iconName ? badgeIcons[iconName] : null;

	let iconProps: BadgeIconProps;

	if (iconName === "star_maker") {
		iconProps = { backgroundColor: color, size: size as "R" | "M" | "L" };
	} else if (iconName === "spot") {
		iconProps = { theme: theme as "Green" | "Red" };
	} else if (iconName === "pin") {
		iconProps = { size: size as "R" | "L", theme: theme as "Red" | "Blue" };
	} else {
		iconProps = {};
	}

	return (
		<div className={`map-container ${size}`}>
			<span className="text-box">{text}</span>
			{SelectedIcon ? (
				<div className={`star-marker-size ${size} map-icon`}>
					{React.createElement(
						SelectedIcon as React.ComponentType<BadgeIconProps>,
						iconProps
					)}
				</div>
			) : (
				<p>error</p>
			)}
		</div>
	);
};

export default MapMaker;
