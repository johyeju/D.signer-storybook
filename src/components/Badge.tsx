import React from 'react';
import './Badge.css';

interface BadgeProps {
	className?: string;
	type?: 'Artery' | 'WideArea' | 'Default' | 'translucent';
	congestion?: 'Default' | 'Usually' | 'crowded' | 'last';
	text: string;
	num?: number;
}

const Badge: React.FC<BadgeProps> = ({
	className = '',
	type = 'Default',
	congestion = 'Default',
	text,
	num,
}) => {
	return (
		<span
			className={`badge ${type ? `badge--${type.toLowerCase()}` : ''} ${
				congestion ? `badge--${congestion.toLowerCase()}` : ''
			} ${className}`.trim()}
		>
			{num}
			{text}
		</span>
	);
};

export default Badge;
