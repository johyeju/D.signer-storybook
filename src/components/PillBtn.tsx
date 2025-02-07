import React from 'react';
import { icons } from './IIconTypes'; // 아이콘 목록 가져오기

type Size = 's' | 'm' | 'l';

interface PillBtnProps {
  size?: Size;
  showLeftIcon?: boolean;
  leftIcon?: keyof typeof icons;
  showRightIcon?: boolean;
  rightIcon?: keyof typeof icons;
  children?: string;
}

const PillBtn: React.FC<PillBtnProps> = ({
  size = 'm',
  showLeftIcon = false,
  leftIcon,
  showRightIcon = false,
  rightIcon,
  children = '버튼',
}) => {
  return (
    <button
      className={`pill-btn pill-btn-${size}`}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '8px',
        padding: '8px 16px',
        borderRadius: '999px',
        border: '1px solid black',
        backgroundColor: 'white', // 배경 설정
        color: 'black', // 텍스트 기본 색상 설정
      }}
    >
      {/* ✅ 좌측 아이콘 표시 */}
      {showLeftIcon && leftIcon && (
        <span
          className="icon-left"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            width: '20px', //아이콘 너비 수정 예정
            height: '20px', //아이콘 높이 수정 예정
          }}
        >
          {React.cloneElement(icons[leftIcon] as React.ReactElement, {
            fill: 'currentColor',
          })}
        </span>
      )}

      <span>{children}</span>

      {showRightIcon && rightIcon && (
        <span
          className="icon-right"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            width: '20px',
            height: '20px',
          }}
        >
          {React.cloneElement(icons[rightIcon] as React.ReactElement, {
            fill: 'currentColor',
          })}
        </span>
      )}
    </button>
  );
};

export default PillBtn;
