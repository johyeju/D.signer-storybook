import React, { useState } from 'react';
import { icons } from './IIconTypes'; // 아이콘 목록 가져오기
import './CtaBtn.css';

interface CtaBtnProps {
  label?: string;
  size?: 'S' | 'M' | 'R';
  type?: 'Primary' | 'Secondary' | 'Tertiary';
  icon?: keyof typeof icons;
  onClick?: () => void;
  className?: string; // ✅ 추가됨
}

const CtaBtn: React.FC<CtaBtnProps> = ({
  label = 'CTA 버튼',
  size = 'M',
  type = 'Primary',
  icon,
  onClick,
  className,
}) => {
  const [isPressed, setIsPressed] = useState(false);

  // 아이콘 크기 설정
  const iconSize = size === 'M' && type === 'Tertiary' ? 16 : 18;

  return (
    <button
      className={`cta-btn ${size.toLowerCase()} ${type.toLowerCase()} ${
        isPressed ? 'active' : ''
      } ${className}`}
      onMouseDown={() => setIsPressed(true)}
      onMouseUp={() => setIsPressed(false)}
      onMouseLeave={() => setIsPressed(false)}
      onClick={onClick}
    >
      {icon && size !== 'S' && (
        <span className="icon">
          {React.cloneElement(icons[icon] as React.ReactElement, {
            fill: 'currentColor',
            width: iconSize,
            height: iconSize,
          })}
        </span>
      )}
      <span className="text-style">{label}</span>
    </button>
  );
};

export default CtaBtn;
