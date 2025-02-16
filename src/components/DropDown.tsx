import React from 'react';
import { icons } from './IIconTypes'; // 아이콘을 관리하는 파일

export interface DropDownProps {
	state: boolean;
	onToggle: () => void;
}

const DropDown: React.FC<DropDownProps> = ({ state, onToggle }) => {
	return (
		<div>
			<div className="dropdown-header" onClick={onToggle}>
				<span className="title">전체 리스트 10</span>
				<div className="icon-container">
					{React.cloneElement(icons['call'] as React.ReactElement, {
						fill: 'currentColor',
						className: 'icon-svg',
					})}
				</div>
			</div>
			{state && (
				<div className="dropdown-content">
					<div className="item">
						Content <span className="highlight">NN</span>
					</div>
					<div className="item">
						Content <span className="highlight">NN</span>
					</div>
					<div className="item">
						Content <span className="highlight">NN</span>
					</div>
				</div>
			)}
		</div>
	);
};

export default DropDown;
