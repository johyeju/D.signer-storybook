import React from 'react';
import { icons } from './IIconTypes'; // 아이콘 목록 가져오기
import './CircleBtn.css'; // 스타일 분리

interface CircleBtnProps {
  size?: 24 | 30 | 36;
  icon?: keyof typeof icons;
  disabled?: boolean;
  onClick?: () => void;
}

const CircleBtn: React.FC<CircleBtnProps> = ({
  size = 24,
  icon,
  disabled = false,
  onClick,
}) => {
  const sizeClass = size === 24 ? 's' : size === 30 ? 'm' : 'l';

  return (
    <button
      className={`circle-btn ${sizeClass} ${
        disabled ? 'circle-btn--disabled' : ''
      }`}
      disabled={disabled}
      onClick={!disabled ? onClick : undefined} // 비활성화 시 클릭 방지
    >
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
