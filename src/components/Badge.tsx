import React, { useEffect, useState } from 'react';
import './Badge.css';

interface BadgeProps {
	className?: string;
	type?: 'Artery' | 'WideArea' | 'Default' | 'translucent';
	congestion?: 'Default' | 'Usually' | 'crowded' | 'last';
	text: string;
	label?: string;
	num?: number;
}

const Badge: React.FC<BadgeProps> = ({
	className = '',
	type = 'Default',
	congestion,
	text,
	label: initialLabel,
	num,
}) => {
	// label 상태를 관리하여 congestion 변경 시 자동 업데이트
	const [label, setLabel] = useState<string | undefined>(initialLabel);

	// congestion 값이 있어야 `label` 업데이트
	useEffect(() => {
		if (congestion) {
			const textMap: Record<
				'Default' | 'Usually' | 'crowded' | 'last',
				string
			> = {
				Default: '여유',
				Usually: '보통',
				crowded: '혼잡',
				last: '막',
			};

			setLabel(textMap[congestion]);
		}
	}, [congestion]);

	return (
		<span
			className={`badge ${type ? `badge--${type.toLowerCase()}` : ''} ${
				congestion ? `badge--${congestion.toLowerCase()}` : ''
			} ${className}`.trim()}
			data-story={className}
		>
			{num && <span className="badge-num">{num}</span>}
			{text && <span className="badge-text">{text}</span>}
			{label && <span className="badge-label">{label}</span>}
		</span>
	);
};

export default Badge;
