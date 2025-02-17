import React from 'react';
import IconSwitch from './IconSwitch';
import { iconSwitches } from './IconSwitchType';
import './BoxSwitch.css';

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
    <div className="box-container">
      <IconSwitch name={name} isOn={isOn} type={type} />
      <div className="box-content">
        {text && <span className="box-text">{text}</span>}

        <button className="box-icon" onClick={handleClick} />
      </div>
    </div>
  );
};

export default BoxSwitch;
