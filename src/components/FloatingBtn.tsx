// FloatingBtn.tsx
import React from 'react';
import { icons } from './IIconTypes'; // 아이콘 목록 가져오기
import './FloatingBtn.css';

interface FloatingBtnProps {
  variant?: 'default' | 'translucent' | 'roundSquare' | 'ellipse';
  label: number | string;
  size?: 40 | 44 | 50;
  icon?: keyof typeof icons;
}

const FloatingBtn: React.FC<FloatingBtnProps> = ({
  variant = 'default',
  label,
  size = 40,
  icon,
}) => {
  const getIconSize = () => {
    return size === 50 ? 32 : 24;
  };

  const sizeClass = size === 40 ? 's' : size === 44 ? 'm' : 'l';

  return (
    <button className={`floating-btn ${variant} ${sizeClass}`}>
      {icon && (
        <span
          className="icon"
          style={{ width: `${getIconSize()}px`, height: `${getIconSize()}px` }}
        >
          {React.cloneElement(icons[icon] as React.ReactElement, {
            fill: 'currentColor',
          })}
        </span>
      )}
      <span className="label">{label}</span>
    </button>
  );
};

export default FloatingBtn;
