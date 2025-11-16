import React from "react";
import "./CircleBtn.css"; // 스타일 분리
import { iconVariable } from "@components/icon/IconTypes";

interface CircleBtnProps {
	size?: 24 | 30 | 36;
	icon?: keyof typeof iconVariable;
	disabled?: boolean;
	onClick?: () => void;
}

const CircleBtn: React.FC<CircleBtnProps> = ({
	size = 24,
	icon,
	disabled = false,
	onClick,
}) => {
	const sizeClass = size === 24 ? "s" : size === 30 ? "m" : "l";

	return (
		<button
			className={`circle-btn ${sizeClass} ${
				disabled ? "circle-btn--disabled" : ""
			}`}
			disabled={disabled}
			onClick={!disabled ? onClick : undefined} // 비활성화 시 클릭 방지
		>
			{icon && (
				<span className="icon">
					{React.cloneElement(iconVariable[icon] as React.ReactElement, {
						fill: "currentColor",
					})}
				</span>
			)}
		</button>
	);
};

export default CircleBtn;
