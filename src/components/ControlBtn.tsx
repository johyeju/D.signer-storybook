import React from 'react';
import { icons } from './IIconTypes';

interface ControlBtnProps {
  text: string;
  icon?: keyof typeof icons;
}

const ControlBtn: React.FC<ControlBtnProps> = ({ text, icon }) => {
  return (
    <button
      className="control-btn"
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '8px',
        padding: '8px 16px',
        backgroundColor: 'white',
        color: '#333333', // 텍스트 컬러
        border: 'none', // 테두리 제거
        borderRadius: '4px', // 둥글기 적용
        cursor: 'pointer',
      }}
    >
      <span className="text-body-13-regular-auto">{text}</span>
      {icon && (
        <span
          className="control-btn__icon"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            width: '24px', // 아이콘 사이즈
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
