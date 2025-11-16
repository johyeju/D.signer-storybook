import React from "react";
import { iconVariable } from "@components/icon/IconTypes";
import "./PhotoBadge.css";

interface PhotoBadgeProps {
	icon?: keyof typeof iconVariable;
	count?: number;
}

const PhotoBadge: React.FC<PhotoBadgeProps> = ({ icon, count }) => {
	return (
		<div className="photo-badge">
			{icon && (
				<span className="photo-badge-icon">
					{React.cloneElement(iconVariable[icon] as React.ReactElement, {
						fill: "currentColor",
					})}
				</span>
			)}
			{typeof count === "number" && (
				<span className="photo-badge-count">
					{count > 999 ? "999+" : count}
				</span>
			)}
		</div>
	);
};

export default PhotoBadge;
