import React, { useState } from 'react';
import { icons } from './IIconTypes'; // 아이콘 목록 가져오기

interface LinkBtnProps {
  text?: string;
  showIcon?: boolean;
  icon?: keyof typeof icons;
  href?: string;
}

const LinkBtn: React.FC<LinkBtnProps> = ({
  text = '링크 버튼',
  showIcon = false,
  icon,
  href = '#',
}) => {
  const [isPressed, setIsPressed] = useState(false);

  return (
    <a
      href={href}
      className="link-btn"
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '8px',
        padding: '8px 16px',
        backgroundColor: 'white',
        color: isPressed ? 'rgba(0, 0, 0, 0.3)' : '#0068C3', // 기본 텍스트 컬러와 pressed 상태 컬러 적용
        textDecoration: 'none',
        cursor: 'pointer',
      }}
      onMouseDown={() => setIsPressed(true)}
      onMouseUp={() => setIsPressed(false)}
      onMouseLeave={() => setIsPressed(false)}
    >
      {showIcon && icon && (
        <span
          className="icon"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            width: '20px',
            height: '20px',
          }}
        >
          {React.cloneElement(icons[icon] as React.ReactElement, {
            fill: 'currentColor',
          })}
        </span>
      )}
      <span>{text}</span>
    </a>
  );
};

export default LinkBtn;
