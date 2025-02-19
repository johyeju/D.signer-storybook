import React, { useState } from 'react';
import { iconSwitches } from './IconSwitchType';
import './IconSwitch.css';

interface IconSwitchProps {
  name: keyof typeof iconSwitches;
  type?: 'blue' | 'green' | 'red'; // star의 경우 선택적으로 사용
  isOn: boolean;
  style?: React.CSSProperties;
}

const IconSwitch: React.FC<IconSwitchProps> = ({ name, type, isOn, style }) => {
  const [isActive, setIsActive] = useState(false);

  const handleMouseDown = () => {
    if (name === 'pin') {
      setIsActive(true);
    }
  };

  const handleMouseUp = () => {
    if (name === 'pin') {
      setIsActive(false);
    }
  };

  const handleMouseLeave = () => {
    if (name === 'pin') {
      setIsActive(false);
    }
  };

  const icon = (() => {
    if (name === 'pin') {
      return iconSwitches.pin[isActive ? 'active' : isOn ? 'on' : 'off'];
    }
    if (name === 'maker') {
      return iconSwitches.maker[isOn ? 'on' : 'off'];
    }
    if (name === 'star' && type) {
      return iconSwitches.star(type, isOn);
    }
    return null;
  })();

  if (!icon) {
    console.warn(`Invalid icon: ${name}`);
    return null;
  }

  return (
    <span
      className={`icon-switch ${
        name === 'pin' ? 'icon-switch--pin icon-switch--clickable' : ''
      } ${isActive ? 'icon-switch--active' : ''}`}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseLeave}
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        ...style,
      }}
    >
      {React.cloneElement(icon as React.ReactElement, {
        style: { ...style },
      })}
    </span>
  );
};

export default IconSwitch;
