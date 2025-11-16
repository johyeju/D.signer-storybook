import React, { useEffect, useRef } from "react";
import { iconVariable } from "@components/icon/IconTypes";
import CircleBtn from "@components/buttons/circle-button/CircleBtn";

export type SearchBarProps = {
	title?: string;
	showLeftIcon?: boolean;
	leftIcon?: keyof typeof iconVariable;
	showRightIcon?: boolean;
	rightIcon?: keyof typeof iconVariable;
	circleBtn?: boolean;
	circleBtnIcon?: keyof typeof iconVariable;
	className?: string;
};

const SearchBar: React.FC<SearchBarProps> = ({
	title = "Title",
	showLeftIcon = true,
	leftIcon,
	showRightIcon = true,
	rightIcon,
	circleBtn = false,
	circleBtnIcon,
	className,
}) => {
	const textRef = useRef<HTMLSpanElement>(null);

	// title 길어지면 자동 스크롤 설정
	useEffect(() => {
		if (textRef.current) {
			textRef.current.scrollLeft = textRef.current.scrollWidth;
		}
	}, [title]); // title 업데이트 될 때마다 실행

	return (
		<div className={`search-bar ${className || ""}`}>
			{showLeftIcon && leftIcon && (
				<span className="icon-left">
					{React.cloneElement(iconVariable[leftIcon] as React.ReactElement, {
						fill: "currentColor",
					})}
				</span>
			)}
			<span className="search-bar-title" ref={textRef}>
				{title}
			</span>

			{/* circleBtn true일 때 CircleBtn 컴포넌트 렌더링 */}
			{circleBtn ? (
				<CircleBtn size={24} icon={circleBtnIcon} />
			) : (
				showRightIcon &&
				rightIcon && (
					<span className="icon-right">
						{React.cloneElement(iconVariable[rightIcon] as React.ReactElement, {
							fill: "currentColor",
						})}
					</span>
				)
			)}
		</div>
	);
};

export default SearchBar;
