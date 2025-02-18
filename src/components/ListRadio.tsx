import React from 'react';
import { icons } from './IIconTypes'; // 아이콘을 관리하는 파일
import './ListRadio.css';

export interface ListRadioProps {
  size?: 'S' | 'M';
  title: string;
  isSubText?: boolean;
  subText?: string;
  isSelected?: boolean;
  onClick?: () => void;
}

const ListRadio: React.FC<ListRadioProps> = ({
  size = 'M',
  title,
  isSubText = false,
  subText,
  isSelected = false,
  onClick,
}) => {
  const shouldShowSubText = size === 'M' && isSubText && subText;

  return (
    <div
      className={`list-radio ${isSelected ? 'active' : ''}`}
      onClick={onClick}
    >
      <div className="text-container">
        <span className={`title ${size}`}>{title}</span>
        {shouldShowSubText && <span className="subText">{subText}</span>}
      </div>
      <div className="icon-container">
        {React.cloneElement(icons['call'] as React.ReactElement, {
          fill: 'currentColor',
          className: `icon-svg ${isSelected ? 'active-icon' : ''}`,
        })}
      </div>
    </div>
  );
};

export default ListRadio;
