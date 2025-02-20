import React from 'react';
import { Trans } from './IconTransport';
import './FloatingBtn.css';

interface FloatingBtnProps {
  label: number | string;
  size?: 40 | 44 | 50;
  icon?: keyof typeof Trans;
  className?: string; // ✅ className을 활용
}

const FloatingBtn: React.FC<FloatingBtnProps> = ({
  label,
  size = 40,
  icon,
  className = '',
}) => {
  const getIconSize = () => (size === 50 ? 32 : 24);
  const sizeClass = size === 40 ? 's' : size === 44 ? 'm' : 'l';

  return (
    <button className={`floating-btn ${className} ${sizeClass}`}>
      <div className="text-box">
        {icon && (
          <span
            className="icon"
            style={{
              width: `${getIconSize()}px`,
              height: `${getIconSize()}px`,
            }}
          >
            {React.cloneElement(Trans[icon] as React.ReactElement, {
              fill: 'currentColor',
            })}
          </span>
        )}
        <span className="label">{label}</span>
      </div>
    </button>
  );
};

export default FloatingBtn;
