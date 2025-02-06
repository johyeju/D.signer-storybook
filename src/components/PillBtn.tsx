// PillBtn.tsx
import React from 'react';
import { icons } from '../components/IconTypes';

type Size = 's' | 'm' | 'l';

type PillBtnProps = {
  size?: Size;
  showLeftIcon?: boolean;
  leftIcon?: keyof typeof icons;
  showRightIcon?: boolean;
  rightIcon?: keyof typeof icons;
};

const PillBtn: React.FC<PillBtnProps> = ({
  showLeftIcon = false,
  leftIcon,
  showRightIcon = false,
  rightIcon,
}) => {
  return (
    <button>
      {showLeftIcon && leftIcon && icons[leftIcon] && (
        <img src={icons[leftIcon]} alt={leftIcon} />
      )}
      버튼
      {showRightIcon && rightIcon && icons[rightIcon] && (
        <img src={icons[rightIcon]} alt={rightIcon} />
      )}
    </button>
  );
};

export default PillBtn;
