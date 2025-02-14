import React from 'react';
import { icons } from './IIconTypes'; // 아이콘을 관리하는 파일
import './ListRadio.css';

export interface ListRadioProps {
  size?: 's' | 'm';
  isActive?: boolean;
  label: string;
  description?: string;
}

const ListRadio: React.FC<ListRadioProps> = ({
  size = 'm',
  isActive = false,
  label,
  description,
}) => {
  return (
    <div className={`list-radio ${isActive ? 'active' : ''}`}>
      <div className="text-container">
        <span className={`label ${size}`}>{label}</span>
        {description && <span className="description">{description}</span>}
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
