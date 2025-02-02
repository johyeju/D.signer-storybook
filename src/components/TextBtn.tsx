import React from 'react';

type TextBtnProps = {
	text: string;
	isBlue: boolean;
};

const TextBtn: React.FC<TextBtnProps> = ({ text, isBlue }) => {
	return (
		<button
			style={{
				color: isBlue ? 'blue' : 'black',
				border: 'none',
				background: 'none',
				cursor: 'pointer',
			}}
		>
			{text}
		</button>
	);
};

export default TextBtn;
