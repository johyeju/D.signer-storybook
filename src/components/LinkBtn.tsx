import React, { useState } from 'react';
import { icons } from './IIconTypes'; // 아이콘 목록 가져오기
import './LinkBtn.css';

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
      className={`link-btn ${isPressed ? 'pressed' : ''}`}
      onMouseDown={() => setIsPressed(true)}
      onMouseUp={() => setIsPressed(false)}
      onMouseLeave={() => setIsPressed(false)}
    >
      {showIcon && icon && (
        <span className="icon">
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
