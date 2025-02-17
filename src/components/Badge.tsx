import React from 'react';
import './Badge.css';

interface BadgeProps {
	className?: string;
	type?: 'Artery' | 'WideArea' | 'Default';
	congestion?: 'Default' | 'Usually' | 'crowded' | 'last';
	text: string;
}

const Badge: React.FC<BadgeProps> = ({
	className = '',
	type = 'Default',
	congestion = 'Default',
	text,
}) => {
	return (
		<span
			className={`badge ${type ? `badge--${type.toLowerCase()}` : ''} ${
				congestion ? `badge--${congestion.toLowerCase()}` : ''
			} ${className}`.trim()}
		>
			{text}
		</span>
	);
};

export default Badge;
