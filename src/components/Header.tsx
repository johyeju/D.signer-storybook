import React from 'react';
import { icons } from '../components/IconTypes';

interface HeaderProps {
	title: string;
	showLeftIcon?: boolean;
	leftIcon?: keyof typeof icons;
	rightIcon?: keyof typeof icons;
}

const Header: React.FC<HeaderProps> = ({
	title,
	showLeftIcon = true,
	leftIcon = 'back' as keyof typeof icons, // 기본값 설정
	rightIcon = 'close',
}) => {
	return (
		<header
			style={{
				display: 'flex',
				justifyContent: 'space-between',
				alignItems: 'center',
				padding: '10px',
			}}
		>
			{/* 좌측 아이콘 */}
			<div>
				{showLeftIcon && leftIcon && icons[leftIcon] && (
					<img src={icons[leftIcon]} alt={leftIcon} />
				)}
			</div>

			{/* 타이틀 */}
			<h1>{title}</h1>

			{/* 우측 아이콘 */}
			<div>
				{rightIcon && icons[rightIcon] && (
					<img src={icons[rightIcon]} alt={rightIcon} />
				)}
			</div>
		</header>
	);
};

export default Header;
