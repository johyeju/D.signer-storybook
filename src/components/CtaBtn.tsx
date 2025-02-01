import { useState } from 'react';

interface CtaBtnProps {
	leftButtonText?: string;
	rightButtonText?: string;
}

const CtaBtn = ({
	leftButtonText = '지금 출발',
	rightButtonText = '완료',
}: CtaBtnProps) => {
	const [isOn, setIsOn] = useState(false);

	const handleToggle = () => {
		setIsOn((prev) => !prev);
	};

	return (
		<div className="flex justify-between items-center p-4 bg-white rounded-lg shadow-md w-full">
			<button
				onClick={handleToggle}
				className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
					isOn ? 'text-blue-500 font-bold' : 'text-gray-500'
				}`}
			>
				{isOn ? 'ON' : leftButtonText}
			</button>
			<button className="px-4 py-2 text-blue-500 text-sm font-medium">
				{rightButtonText}
			</button>
		</div>
	);
};

export default CtaBtn;
