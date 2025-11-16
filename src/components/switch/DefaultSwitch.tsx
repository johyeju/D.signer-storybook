import React, { useState } from 'react';
import './DefaultSwitch.css'; // 스타일 분리

interface DefaultSwitchProps {
	checked?: boolean; // 컨트롤 패널에서 조작할 ON/OFF 상태
	text?: string; // 표시할 텍스트
}

const DefaultSwitch: React.FC<DefaultSwitchProps> = ({
	checked = false,
	text = 'ON',
}) => {
	const [isPressed, setIsPressed] = useState(false);

	return (
		<button
			onMouseDown={() => setIsPressed(true)}
			onMouseUp={() => setIsPressed(false)}
			onMouseLeave={() => setIsPressed(false)}
			className={`switch ${checked ? 'checked' : ''} ${
				isPressed ? 'pressed' : ''
			}`}
		>
			<span className="switch-text">{checked ? text : 'OFF'}</span>
			<span className={`switch-handle ${isPressed ? 'handle-pressed' : ''}`}>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="18"
					height="18"
					viewBox="0 0 18 18"
					fill="none"
					className="switch-icon"
				>
					<circle cx="9" cy="9" r="9" />
				</svg>
			</span>
		</button>
	);
};

export default DefaultSwitch;
