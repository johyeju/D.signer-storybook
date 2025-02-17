import React, { useState } from 'react';
import { iconSwitches } from './IconSwitchType';

interface IconSwitchProps {
  name: keyof typeof iconSwitches;
}

const IconSwitch: React.FC<IconSwitchProps> = ({ name }) => {
  const [isActive, setIsActive] = useState(false);

  const handleMouseDown = () => {
    if (name === 'pin') {
      setIsActive(true); // 마우스 누르면 active 상태로 변경
    }
  };

  const handleMouseUp = () => {
    if (name === 'pin') {
      setIsActive(false); // 마우스 떼면 다시 default 상태로 변경
    }
  };

  const handleMouseLeave = () => {
    if (name === 'pin') {
      setIsActive(false); // 마우스가 버튼 영역을 벗어나도 default 상태로 변경
    }
  };

  const icon =
    name === 'pin' && typeof iconSwitches.pin === 'function'
      ? iconSwitches.pin(isActive ? 'active' : 'default')
      : iconSwitches[name];

  if (!icon || typeof icon === 'function') {
    console.warn(`Invalid icon: ${name}`);
    return null;
  }

  return (
    <span
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseLeave}
      style={{ cursor: name === 'pin' ? 'pointer' : 'default' }}
    >
      {icon}
    </span>
  );
};

export default IconSwitch;
