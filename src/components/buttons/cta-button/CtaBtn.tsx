import React, { useState } from "react";
import "./CtaBtn.css";
import { iconVariable } from "@components/icon/IconTypes";

interface CtaBtnProps {
	label?: string;
	size?: "S" | "M" | "R";
	type?: "Primary" | "Secondary" | "Tertiary";
	icon?: keyof typeof iconVariable;
	onClick?: () => void;
	className?: string;
}

const CtaBtn: React.FC<CtaBtnProps> = ({
	label = "CTA 버튼",
	size = "M",
	type = "Primary",
	icon,
	onClick,
	className,
}) => {
	const [isPressed, setIsPressed] = useState(false);

	// 아이콘 크기 설정
	const iconSize = size === "M" && type === "Tertiary" ? 16 : 18;

	return (
		<button
			className={`cta-btn ${size.toLowerCase()} ${type.toLowerCase()} ${
				isPressed ? "active" : ""
			} ${className}`}
			onMouseDown={() => setIsPressed(true)}
			onMouseUp={() => setIsPressed(false)}
			onMouseLeave={() => setIsPressed(false)}
			onClick={onClick}
		>
			{icon && size !== "S" && (
				<span className="icon">
					{React.cloneElement(iconVariable[icon] as React.ReactElement, {
						fill: "currentColor",
						width: iconSize,
						height: iconSize,
					})}
				</span>
			)}
			<span className="text-style">{label}</span>
		</button>
	);
};

export default CtaBtn;
