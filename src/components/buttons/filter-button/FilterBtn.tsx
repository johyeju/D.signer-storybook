import React from "react";
import "./FilterBtn.css";
import { iconVariable } from "@components/icon/IconTypes";

interface FilterProps {
	size: "R" | "M";
	text: string;
	icon?: keyof typeof iconVariable;
	type?: "default" | "selected";
	date?: "오늘" | "내일" | "NN월 NN일";
	amPm?: "오전" | "오후";
	num?: number;
}

const Filter: React.FC<FilterProps> = ({
	size,
	text,
	icon,
	type = "default",
	date,
	amPm,
	num,
}) => {
	const formatTime = (num: number | undefined) => {
		if (!num) return "01:00";
		const hours = Math.min(Math.floor(num / 100), 12)
			.toString()
			.padStart(2, "0");
		const minutes = Math.min(num % 100, 59)
			.toString()
			.padStart(2, "0");
		return `${hours}:${minutes}`;
	};

	return (
		<button
			className={`filter-btn ${
				size === "R" ? "filter-btn--regular" : "filter-btn--medium"
			}`}
		>
			{type === "default" ? (
				<span className="text-body-13-regular-auto">{text}</span>
			) : (
				<span className="text-body-13-regular-auto">
					{date} {amPm} {formatTime(num)} 출발
				</span>
			)}
			{icon && (
				<span className="filter-btn__icon">
					{React.cloneElement(iconVariable[icon] as React.ReactElement, {
						fill: "currentColor",
					})}
				</span>
			)}
		</button>
	);
};

export default Filter;
