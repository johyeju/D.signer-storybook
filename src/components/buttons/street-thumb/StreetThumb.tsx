import React from "react";
import { iconVariable } from "@components/icon/IconTypes";
import "./StreetThumb.css";

interface StreetThumbProps {
	bottomText?: boolean;
	direction?: "왼쪽" | "오른쪽";
	type?: "L" | "R";
}

const StreetThumb: React.FC<StreetThumbProps> = ({
	bottomText = false,
	direction = "왼쪽",
	type = "L",
}) => {
	return (
		<div className={`street-thumb ${type.toLowerCase()}`}>
			<div className="icon">
				{React.cloneElement(iconVariable["share"] as React.ReactElement, {
					fill: "currentColor",
				})}
			</div>
			{bottomText && (
				<div className="bottom-text">도로의 {`${direction}`}에 있습니다.</div>
			)}
		</div>
	);
};

export default StreetThumb;
