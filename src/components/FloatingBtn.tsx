// FloatingBtn.tsx
import React from 'react';
import { icons } from './IIconTypes'; // 아이콘 목록 가져오기

interface FloatingBtnProps {
  variant?: 'default' | 'translucent' | 'roundSquare' | 'ellipse';
  label: number | string;
  size?: number;
  backgroundColor?: string;
  icon?: keyof typeof icons; // 아이콘 타입 수정
}

const FloatingBtn: React.FC<FloatingBtnProps> = ({
  variant = 'default',
  label,
  size = 40,
  backgroundColor = '#FFFFFF',
  icon,
}) => {
  const getClassName = () => {
    switch (variant) {
      case 'translucent':
        return 'bg-white bg-opacity-50 text-black shadow-md';
      case 'roundSquare':
        return 'rounded-xl bg-blue-500 text-white shadow-lg';
      case 'ellipse':
        return 'rounded-full bg-green-500 text-white shadow-xl';
      default:
        return 'bg-gray-800 text-white shadow-md';
    }
  };

  // 아이콘 크기 조절 로직
  const getIconSize = () => {
    if (size === 50) return 32;
    return 24;
  };

  const renderContent = () => {
    switch (variant) {
      case 'default':
        return (
          <span
            style={{
              position: 'relative',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {icon && (
              <span
                className="icon"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: `${getIconSize()}px`,
                  height: `${getIconSize()}px`,
                }}
              >
                {React.cloneElement(icons[icon] as React.ReactElement, {
                  fill: 'currentColor',
                })}
                <span
                  style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    color: 'white',
                    fontWeight: 'bold',
                  }}
                >
                  {label}
                </span>
              </span>
            )}
          </span>
        );
      case 'translucent':
      case 'roundSquare':
        return (
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            {icon && (
              <span
                className="icon"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: `${getIconSize()}px`,
                  height: `${getIconSize()}px`,
                }}
              >
                {React.cloneElement(icons[icon] as React.ReactElement, {
                  fill: 'currentColor',
                })}
              </span>
            )}
            <span>{label}</span>
          </div>
        );
      case 'ellipse':
        return (
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            {icon && (
              <span
                className="icon"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: `${getIconSize()}px`,
                  height: `${getIconSize()}px`,
                }}
              >
                {React.cloneElement(icons[icon] as React.ReactElement, {
                  fill: 'currentColor',
                })}
              </span>
            )}
            <span>{label}</span>
          </div>
        );
      default:
        return <span>{label}</span>;
    }
  };

  return (
    <button
      className={`absolute top-4 left-4 p-4 ${getClassName()}`}
      style={{
        fontSize: `${size}px`,
        minWidth: '80px',
        minHeight: '50px',
        backgroundColor: backgroundColor,
        border: 'none',
        outline: 'none',
        boxShadow: '0px 2px 12px rgba(0, 0, 0, 0.15)',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {renderContent()}
    </button>
  );
};

export default FloatingBtn;
