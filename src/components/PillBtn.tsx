import React from 'react';
import { icons } from './IIconTypes';
import './PillBtn.css';

type Size = 'xs' | 's' | 'm' | 'l';

interface PillBtnProps {
  size?: Size;
  showLeftIcon?: boolean;
  leftIcon?: keyof typeof icons;
  showRightIcon?: boolean;
  rightIcon?: keyof typeof icons;
  text?: string;
}

const PillBtn: React.FC<PillBtnProps> = ({
  size = 'm',
  showLeftIcon = false,
  leftIcon,
  showRightIcon = false,
  rightIcon,
  text = 'content',
}) => {
  return (
    <button className={`pill-btn pill-btn-${size}`}>
      {showLeftIcon && leftIcon && (
        <span className="icon-left">
          {React.cloneElement(icons[leftIcon] as React.ReactElement, {
            fill: 'currentColor',
          })}
        </span>
      )}
      <span>{text}</span>
      {showRightIcon && rightIcon && (
        <span className="icon-right">
          {React.cloneElement(icons[rightIcon] as React.ReactElement, {
            fill: 'currentColor',
          })}
        </span>
      )}
    </button>
  );
};

export default PillBtn;
