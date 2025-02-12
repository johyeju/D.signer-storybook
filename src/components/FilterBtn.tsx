import React from 'react';
import { icons } from './IIconTypes';
import './FilterBtn.css';

interface FilterProps {
  size: 'R' | 'M';
  text: string;
  icon?: keyof typeof icons;
}

const Filter: React.FC<FilterProps> = ({ size, text, icon }) => {
  return (
    <button
      className={`filter-btn ${
        size === 'R' ? 'filter-btn--regular' : 'filter-btn--medium'
      }`}
    >
      <span className="text-body-13-regular-auto">{text}</span>
      {icon && (
        <span className="filter-btn__icon">
          {React.cloneElement(icons[icon] as React.ReactElement, {
            fill: 'currentColor',
          })}
        </span>
      )}
    </button>
  );
};

export default Filter;
