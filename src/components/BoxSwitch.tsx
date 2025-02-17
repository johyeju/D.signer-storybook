import React from 'react';
import IconSwitch from './IconSwitch';
import { iconSwitches } from './IconSwitchType';

interface BoxSwitchProps {
  name: keyof typeof iconSwitches;
  isOn: boolean;
  text?: string;
  type?: 'blue' | 'green';
  onChange?: (value: boolean) => void;
}

const BoxSwitch: React.FC<BoxSwitchProps> = ({
  name,
  isOn,
  text,
  type,
  onChange,
}) => {
  const handleClick = () => {
    onChange?.(!isOn);
  };

  return (
    <div className="box-switch">
      <IconSwitch name={name} isOn={isOn} type={type} />

      {text && <span className="box-switch-text">{text}</span>}

      <button className="box-switch-btn" onClick={handleClick} />
    </div>
  );
};

export default BoxSwitch;
