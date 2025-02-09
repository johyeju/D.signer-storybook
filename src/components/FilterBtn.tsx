import React from 'react';
import { icons } from './IIconTypes';

interface FilterProps {
	size: 'R' | 'M';
	text: string;
	icon?: keyof typeof icons;
}

const Filter: React.FC<FilterProps> = ({ size, text, icon }) => {
	return (
		<button
			className={`filter-btn ${
				size === 'R' ? 'filter-btn--regular' : 'filter-btn--medium'
			}`}
			style={{
				display: 'inline-flex',
				alignItems: 'center',
				gap: '8px',
				padding: '8px 16px',
				backgroundColor: 'white',
				color: '#333333', // 텍스트 컬러 변경
				border: 'none', // 테두리 제거
			}}
		>
			<span className="text-body-13-regular-auto">{text}</span>{' '}
			{/* 폰트 테일윈드 적용 */}
			{icon && (
				<span
					className="filter-btn__icon"
					style={{
						display: 'inline-flex',
						alignItems: 'center',
						width: '24px', // 아이콘 사이즈 수정
						height: '24px', // 아이콘 사이즈 수정
					}}
				>
					{React.cloneElement(icons[icon] as React.ReactElement, {
						fill: 'currentColor',
					})}
				</span>
			)}
		</button>
	);
};

export default Filter;
