import React from "react";
import { iconVariable } from "@components/icon/IconTypes";
import "./PillBtn.css";

type Size = "xs" | "s" | "m" | "l";

interface PillBtnProps {
	size?: Size;
	showLeftIcon?: boolean;
	leftIcon?: keyof typeof iconVariable;
	showRightIcon?: boolean;
	rightIcon?: keyof typeof iconVariable;
	text?: string;
	className?: string;
}

const PillBtn: React.FC<PillBtnProps> = ({
	size = "m",
	showLeftIcon = false,
	leftIcon,
	showRightIcon = false,
	rightIcon,
	text = "content",
	className,
}) => {
	return (
		<button className={`pill-btn pill-btn-${size} ${className || ""}`}>
			{showLeftIcon && leftIcon && (
				<span className="icon-left">
					{React.cloneElement(iconVariable[leftIcon] as React.ReactElement, {
						fill: "currentColor",
					})}
				</span>
			)}
			<span>{text}</span>
			{showRightIcon && rightIcon && (
				<span className="icon-right">
					{React.cloneElement(iconVariable[rightIcon] as React.ReactElement, {
						fill: "currentColor",
					})}
				</span>
			)}
		</button>
	);
};

export default PillBtn;
