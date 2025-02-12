import React from 'react';
import { icons } from './IIconTypes';
import './ControlBtn.css';

interface ControlBtnProps {
  text: string;
  icon?: keyof typeof icons;
  leftIcon?: keyof typeof icons;
  num?: number;
  className?: string; // 클래스 네임으로 스타일 관리
}

const ControlBtn: React.FC<ControlBtnProps> = ({
  text,
  icon,
  leftIcon,
  num,
  className = '',
}) => {
  return (
    <button className={`control-btn ${className}`}>
      {/* 왼쪽 아이콘이 있을 경우 표시 */}
      {leftIcon && (
        <span className="control-btn__left-icon">
          {React.cloneElement(icons[leftIcon] as React.ReactElement, {
            fill: 'currentColor',
          })}
        </span>
      )}

      {/* 버튼 텍스트와 숫자 */}
      <span className="text-body-13-regular-auto">
        {text}
        {num !== undefined && <span className="control-btn__num">{num}</span>}
      </span>

      {/* 오른쪽 아이콘이 있을 경우 표시 */}
      {icon && (
        <span className="control-btn__icon">
          {React.cloneElement(icons[icon] as React.ReactElement, {
            fill: 'currentColor',
          })}
        </span>
      )}
    </button>
  );
};

export default ControlBtn;
