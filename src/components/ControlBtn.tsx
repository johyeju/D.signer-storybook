import React from 'react';
import { icons } from './IIconTypes';

interface ControlBtnProps {
  text: string;
  icon?: keyof typeof icons; // 우측 아이콘
  leftIcon?: keyof typeof icons; // 좌측 아이콘 추가
}

const ControlBtn: React.FC<ControlBtnProps> = ({ text, icon, leftIcon }) => {
  return (
    <button
      className="control-btn"
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '8px',
        padding: '8px 16px',
        backgroundColor: 'white',
        color: '#333333',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
      }}
    >
      {/* 좌측 아이콘 렌더링 */}
      {leftIcon && (
        <span
          className="control-btn__left-icon"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            width: '24px',
            height: '24px',
          }}
        >
          {React.cloneElement(icons[leftIcon] as React.ReactElement, {
            fill: 'currentColor',
          })}
        </span>
      )}

      {/* 텍스트 */}
      <span className="text-body-13-regular-auto">{text}</span>

      {/* 우측 아이콘 렌더링 */}
      {icon && (
        <span
          className="control-btn__icon"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            width: '24px',
            height: '24px',
          }}
        >
          {React.cloneElement(icons[icon] as React.ReactElement, {
            fill: 'currentColor',
          })}
        </span>
      )}
    </button>
  );
};

export default ControlBtn;
