import React from 'react';
import { icons } from './IIconTypes'; // 아이콘 목록 가져오기
import './CircleBtn.css'; // 스타일 분리

interface CircleBtnProps {
  size?: 24 | 30 | 36;
  icon?: keyof typeof icons;
}

const CircleBtn: React.FC<CircleBtnProps> = ({ size = 24, icon }) => {
  const sizeClass = size === 24 ? 's' : size === 30 ? 'm' : 'l';

  return (
    <button className={`circle-btn ${sizeClass}`}>
      {icon && (
        <span className="icon">
          {React.cloneElement(icons[icon] as React.ReactElement, {
            fill: 'currentColor',
          })}
        </span>
      )}
    </button>
  );
};

export default CircleBtn;
