import React from 'react';
import { icons } from './IIconTypes'; // 아이콘을 관리하는 파일
import './ListRadio.css';

export interface ListRadioProps {
  size?: 'S' | 'M';
  isActive?: boolean;
  title: string;
  isSubText?: boolean;
  subText?: string;
}

const ListRadio: React.FC<ListRadioProps> = ({
  size = 'M',
  isActive = false,
  title,
  isSubText = false,
  subText,
}) => {
  const shouldShowSubText = size === 'M' && isSubText && subText;

  return (
    <div className={`list-radio ${isActive ? 'active' : ''}`}>
      <div className="text-container">
        <span className={`title ${size}`}>{title}</span>
        {shouldShowSubText && <span className="subText">{subText}</span>}
      </div>
      <div className="icon-container">
        {React.cloneElement(icons['call'] as React.ReactElement, {
          fill: 'currentColor',
          className: `icon-svg ${isActive ? 'active-icon' : ''}`,
        })}
      </div>
    </div>
  );
};

export default ListRadio;
