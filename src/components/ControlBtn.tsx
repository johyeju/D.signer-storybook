import React from 'react';
import { icons } from './IIconTypes';

interface ControlBtnProps {
  text: string;
  icon?: keyof typeof icons;
  leftIcon?: keyof typeof icons;
  num?: number;
  variant?: 'default' | 'alert'; // 버튼 스타일 구분
}

const ControlBtn: React.FC<ControlBtnProps> = ({
  text,
  icon,
  leftIcon,
  num,
  variant = 'default',
}) => {
  return (
    <button
      className="control-btn"
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: variant === 'alert' ? '8px' : '8px',
        padding: variant === 'alert' ? '8px 16px' : '8px 16px',
        backgroundColor: 'white',
        color: variant === 'alert' ? '#F61024' : '#333333',
        border: variant === 'alert' ? '1px solid #F61024' : 'none',
        borderRadius: '8px',
        cursor: 'pointer',
        fontSize: '14px',
      }}
    >
      {/* 왼쪽 아이콘이 있을 경우 표시 */}
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

      {/* 버튼 텍스트와 숫자 (숫자는 alert일 때만) */}
      <span
        className="text-body-13-regular-auto"
        style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}
      >
        {text}
        {variant === 'alert' &&
          num !== undefined && ( //숫자 위치 수정
            <span
              className="control-btn__num"
              style={{
                color: '#F61024',
                fontSize: '14px',
                fontWeight: 'bold',
              }}
            >
              {num}
            </span>
          )}
      </span>

      {/* 오른쪽 아이콘이 있을 경우 표시 */}
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
