import React from 'react';

type CtaBtnProps = {
	leftButtonText?: string;
	leftButtonVisible: boolean;
	rightButtonText: string;
};

const CtaBtn: React.FC<CtaBtnProps> = ({
	leftButtonText,
	leftButtonVisible,
	rightButtonText,
}) => {
	return (
		<div
			style={{
				display: 'flex',
				justifyContent: leftButtonVisible ? 'space-around' : 'center',
				padding: '10px',
				gap: '10px',
			}}
		>
			{leftButtonVisible && leftButtonText && (
				<button style={{ color: 'gray' }}>{leftButtonText}</button>
			)}
			<button style={{ color: 'blue' }}>{rightButtonText}</button>
		</div>
	);
};

export default CtaBtn;
