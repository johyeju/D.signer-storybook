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
			data-story={className} //스토리별 클래스 분류
		>
			{num && <span className="badge-num">{num}</span>}
			{text && <span className="badge-text">{text}</span>}
		</span>
	);
};

export default Badge;
