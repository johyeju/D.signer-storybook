import React from 'react';
import './Badge.css';

interface BadgeProps {
	type?: 'Artery' | 'WideArea' | 'Default';
	text: string;
}

const Badge: React.FC<BadgeProps> = ({ type = 'Default', text }) => {
	return (
		<span
			className={`badge ${type ? `badge--${type.toLowerCase()}` : ''}`}
			data-text={text}
		>
			{text}
		</span>
	);
};

export default Badge;
